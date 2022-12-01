import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyBuyerCard from '../Dashboard/MyBuyerCard'


const Mybuyers = () => {
    useTitle('My Buyer')
    const { user } = useContext(AuthContext)
    const { data: buyers, isLoading } = useQuery({
        queryKey: ['buyers', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-cars-sale-server-sites.vercel.app/buyers?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }


    return (
        <div className='h-screen w-full'>
            {

                buyers.length === 0 ?
                    <>
                        <p className='text-center text-red-600 my-10 mb-52 text-xl font-semibold'>
                            Buyer Not Booking.
                        </p>
                    </>
                    :
                    <>
                        <h1 className='text-center text-xl font-semibold my-10'>Total Booking {buyers.length} {buyers.length === 1 || buyers.length === 0 ? 'buyer' : 'buyers'}</h1>
                    </>
            }
            <div className='px-4 md:px-10'>
                {

                    buyers.map((buyer, i) => <MyBuyerCard
                        i={i}
                        key={buyer._id}
                        buyer={buyer}></MyBuyerCard>)

                }
            </div>

        </div>
    );
};

export default Mybuyers;