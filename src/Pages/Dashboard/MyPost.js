import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyPostCard from '../Dashboard/MyPostCard'


const MyPost = () => {
    useTitle('My Post')
    const { user } = useContext(AuthContext)
    const [cardetails, setcardetails] = useState(null)

    const { data: cars, isLoading, refetch } = useQuery({
        queryKey: ['cars', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-cars-sale-server-sites.vercel.app/allcars?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }


    const handleAdvertise = (id) => {
        fetch(`https://used-cars-sale-server-sites.vercel.app/advertiseCar/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Product is Live on Ad Section')
            })
    }
    const handleDelete = (id) => {
        fetch(`https://used-cars-sale-server-sites.vercel.app/car/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.error('Post Delete Success')
                }
            })

    }


    const handleSold = (id) => {
        fetch(`https://used-cars-sale-server-sites.vercel.app/car/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Cars Sold')
            })
    }

    return (
        <div className='h-screen w-full'>
            <h1 className='text-xl text-center my-10 font-semibold'>You have {cars.length} {cars.length === 0 ? 'Product' : 'Products'}</h1>
            {
                cars.length === 0 && <>
                    <p className='font-semibold text-xs my-4 text-center'>You are not <Link to='/dashboard/addaproduct' className='underline'>post yet</Link></p>
                </>
            }
            <div className='px-4 md:px-32'>
                {
                    cars.map(car => <MyPostCard
                        key={car._id}
                        car={car}
                        handleAdvertise={handleAdvertise}
                        handleDelete={handleDelete}
                        handleSold={handleSold}
                    >
                    </MyPostCard>)
                }


            </div>

        </div>
    );
};

export default MyPost;