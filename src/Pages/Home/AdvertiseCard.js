import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller'


const AdvertiseCard = ({ car, setCardetails }) => {

    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const {
        _id,
        model,
        image,
        brand,
        condition,
        totalDriven,
        orginalPrice,
        resalePrice,
        sellerNumber,
        sellerLocation,
        postdate,
        cardetails,
        sellerName,
        status,
        purchaseDate,
        sellerEmail,
        reported


    } = car;


    const { data: seller = [], } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user`, {

            })
            const data = await res.json()
            const users = data.filter(user => user.email === sellerEmail)
            return users
        }

    })
    console.log(seller);



    const handleReport = id => {
        fetch(`http://localhost:5000/reported/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Reported Success Fully')
            })
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className="card-title flex justify-center mt-4 mb-4">
                    Seller: {sellerName}
                    {
                        seller[0]?.verifySeller && <div className="badge badge-primary">verified</div>
                    }

                </h2>
                <figure><img src={image} alt="Car" /></figure>
                <div className="card-body text-gray-900">
                    <h1>Brand : {model}</h1>
                    <p>Conditon : {condition}</p>
                    <p>New Price : {orginalPrice}</p>
                    <p>Resale Price : {resalePrice}</p>
                    <p>Purchase Year : {purchaseDate}</p>
                    <p>Drived : {totalDriven}</p>
                    <p>Location : {sellerLocation}</p>
                    <p>Number : {sellerNumber}</p>
                    <p>Date : {postdate}</p>
                    <p></p>
                    <div className='text-gray-900 shadow-lg'>
                        <p>
                            Details -
                        </p>
                        <p className='font-normal text-sm' >
                            {cardetails}
                        </p>
                    </div>

                    {
                        user?.uid ?
                            <>
                                {
                                    isBuyer ?
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-secondary">
                                                <label

                                                    onClick={() => setCardetails(car)}
                                                    htmlFor="bookNowModal" className=''>Book Now</label>
                                            </div>
                                            <div onClick={() => handleReport(_id)} className="badge  badge-accent">Report</div>
                                        </div>
                                        :

                                        <>
                                            <p className='text-rose-700 font-bold'>Only Buyer booking this item.</p>
                                        </>

                                }
                            </>
                            :
                            <>
                                <p className='text-rose-700 font-bold'>Please <Link to='/login' className='underline'> Login</Link> buyer account to book this car.</p>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default AdvertiseCard;