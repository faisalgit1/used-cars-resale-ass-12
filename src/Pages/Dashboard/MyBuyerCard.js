import React from 'react';

const MyBuyerCard = ({ buyer, i }) => {

    const {

        buyerName,
        buyerNumber,
        meetLocation,
        bikeModel,
        bikePrice,
    }
        = buyer;

    return (
        <div className='flex justify-center mb-2'>
            <div className="card w-96 bg-secondary text-neutral-content">
                <div className="card-body items-center text-center text-light-500">
                    <h1 className="card-title text-2xl text-light-500 font-bold">Buyer: {buyerName}</h1>
                    <p className='font-bold '>Number : {buyerNumber}</p>
                    <p className='font-bold'>Location: {meetLocation}</p>
                    <h2 className='text-2xl text-light-500 font-bold'>Buying Items</h2>
                    <div className="card-actions justify-between">
                        <p className='font-bold'> Model : {bikeModel}</p>
                        <p className='font-bold'> Price:{bikePrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBuyerCard;