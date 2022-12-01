
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutCard from "./CheckOutCard";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="p-5 mx-4 bg-white rounded-lg shadow-lg my-10 ">
            <h1 className="text-xl font-semibold">
                Confirm Payment for {data.carModel
                }
            </h1>
            <p className="text-semibold">
                Please Pay <strong>{data.carPrice}</strong> tk
            </p>
            <div className="my-4">
                <Elements stripe={stripePromise}>
                    <CheckOutCard booking={data} />
                </Elements>
            </div>
        </div>
    );
};

export default CheckOut;
