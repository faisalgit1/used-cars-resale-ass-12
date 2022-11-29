import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import MyPostCard from '../Dashboard/MyPostCard'


const MyPost = () => {

    const { user } = useContext(AuthContext)
    const [cardetails, setcardetails] = useState(null)

    const { data: cars, isLoading, refetch } = useQuery({
        queryKey: ['cars', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allcars?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <p>Loading..</p>
    }


    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/advertiseCar/${id}`, {
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


    return (
        <div className='h-screen w-full'>
            <h1 className='text-xl text-center my-10 font-semibold'>You have {cars.length} {cars.length === 0 ? 'Product' : 'Products'}</h1>
            {
                cars.length === 0 && <>
                    <p className='font-semibold text-xs my-4 text-center'>Wand To <Link to='/dashboard/addaproduct' className='underline'>add a Product</Link></p>
                </>
            }
            <div className='px-4 md:px-32'>
                {
                    cars.map(car => <MyPostCard
                        key={car._id}
                        car={car}
                        handleAdvertise={handleAdvertise}
                        setcardetails={setcardetails}
                    >
                    </MyPostCard>)
                }


            </div>

        </div>
    );
};

export default MyPost;