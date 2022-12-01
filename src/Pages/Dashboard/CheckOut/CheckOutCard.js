import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const CheckOutCard = ({ booking }) => {
    const stripe = useStripe();
    const navigate = useNavigate()
    const elements = useElements();

    const [cardError, setCardError] = useState("");
    const [proccessing, setProccessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const { carPrice, buyerName, buyerEmail, carId } = booking;

    useEffect(() => {
        fetch("https://used-cars-sale-server-sites.vercel.app/create-checkout-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ carPrice }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [carPrice]);

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements || proccessing) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError("");
        }
        setProccessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }
        if (paymentIntent.status === 'succeeded') {
            setProccessing(false)
            toast.success('Checkout Success')
            navigate('/dashboard/mybooking')
            const paymentDetails = {
                email: buyerEmail,
                transactionID: paymentIntent.id,
                carPrice,
                bookingID: carId,


            }

            fetch('https://used-cars-sale-server-sites.vercel.app/checkout', {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(paymentDetails)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);


                })

        }

    };

    return (
        <div className="w-70  mx-auto  ">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <p className="text-red-500">{cardError}</p>
                <button
                    className="text-white py-1 bg-[#BE123B] rounded font-semibold px-4 my-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Continue to Checkout
                </button>
            </form>

        </div>
    );
};

export default CheckOutCard;
