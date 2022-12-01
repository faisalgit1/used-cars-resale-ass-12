import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';
import AdvertiseCard from '../Pages/Home/AdvertiseCard'
import BookModal from './Booking/BookModal';

const CategoryId = () => {
    useTitle('Category Car')
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const [cardetails, setCardetails] = useState(null)
    const [showCars, setShowCars] = useState([])

    useEffect(() => {
        const notPaidCars = data.filter(car => car.paid !== "true")
        setShowCars(notPaidCars)
    }, [data])
    return (
        <div className='px-4 md:px-20 my-10'>
            <h1 className='text-center my-10 font-semibold text-xl'>
                {data.length > 0 ? <>Brand Category </> : <>0 Catagory</>}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10'>
                {
                    showCars?.map(car => <AdvertiseCard
                        key={car._id}
                        car={car}
                        setCardetails={setCardetails}
                    ></AdvertiseCard>)
                }
            </div>
            {
                cardetails &&
                <BookModal
                    user={user}
                    setCardetails={setCardetails}
                    cardetails={cardetails}
                >
                </BookModal>
            }
        </div>
    );
};

export default CategoryId;