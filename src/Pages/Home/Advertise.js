import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import BookModal from '../Booking/BookModal';
import AdvertiseCard from '../Home/AdvertiseCard'

const Advertise = () => {
    const { user } = useContext(AuthContext)
    const [cardetails, setCardetails] = useState(null)
    const [advertiseCars, setAdvertiseCar] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alladvertisecar')
            .then(res => res.json())
            .then(data => {
                const adcars = data.filter(car => car.advertise === 'true' && car.paid !== 'true');
                setAdvertiseCar(adcars)
            })

    }, [])


    return (
        <div>
            {
                advertiseCars.length === 0 ? <></>
                    :
                    <>
                        <div className='my-20   bg-gray-200'>
                            <h1 className='text-3xl font-semibold py-10 text-center'>Advertise Section </h1>
                            <div className='px-4 md:px-20 pb-10 gap-10 justify-items-center grid-cols-1 md:grid-cols-2 grid '>
                                {
                                    advertiseCars.map(car => <AdvertiseCard
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



                    </>
            }
        </div>
    );
};

export default Advertise;