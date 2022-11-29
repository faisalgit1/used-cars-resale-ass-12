import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import request from '../../http-request-axios';
import MyBookingCard from './MyBookingCard';


const MyBooking = () => {
    useTitle('My Bookings')
    const { user, logOut } = useContext(AuthContext)
    const { data: bookingCars, isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {

            try {
                const { data } = await request.get(`/booked?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('Token')}`
                    }
                })
                return data
            }
            catch (error) {
                if (error.response) {
                    if (error.response.status === 401 || error.response.status === 403) {
                        return logOut()
                    }
                }

            }


        }

    })


    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='h-screen w-full'>
            {
                bookingCars.length === 0 ?
                    <>
                        <p className='text-center font-semibold my-52'>

                            You haven't booked any think yet <Link className='underline' to='/'>Book Now</Link>

                        </p>
                    </>
                    :
                    <>
                        <h1 className='text-xl font-semibold text-center my-10 '>My Bookings</h1>
                    </>
            }
            <div className='px-4 md:px-40'>
                {

                    bookingCars.map(car => <MyBookingCard
                        key={car._id}
                        car={car}
                    ></MyBookingCard>)

                }
            </div>

        </div>
    );
};

export default MyBooking;