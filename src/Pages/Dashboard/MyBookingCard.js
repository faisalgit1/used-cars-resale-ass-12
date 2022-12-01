import React from 'react';
import { Link } from 'react-router-dom';

const MyBookingCard = ({ car }) => {
    const {

        _id,
        img,
        paid,
        carModel,
        carPrice,
        meetLocation,
        buyerNumber,

    } = car





    return (
        <div>
            <div className='flex flex-col md:flex-row rounded-lg p-2 bg-white shadow-lg relative my-4 border items-center font-semibold gap-5'>
                <img className='w-40' src={img} alt="" />
                <div className='flex flex-col text-center md:text-start'>
                    <h1 className='text-xl'>
                        {carModel.slice(0, 15)}
                    </h1>
                    <div>

                        <p>
                            Price:{carPrice}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col text-center md:text-start'>


                    <p>
                        Location: {meetLocation}
                    </p>
                    <p>
                        Number : {buyerNumber}
                    </p>

                </div>
                <div className='px-10'>
                    {
                        paid === 'true' ?
                            <>
                                <p>Done</p>
                            </>
                            :
                            <>
                                <Link to={`/dashboard/checkout/${_id}`}>
                                    <button className='bg-red-500 text-white font-semibold py-1 px-4 rounded-lg'>CheckOut</button>
                                </Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default MyBookingCard;