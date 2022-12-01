import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import request from '../../http-request-axios';


const AllSellers = () => {

    useTitle('ALL Sellers')

    const { user, logOut } = useContext(AuthContext)

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {


            try {
                const { data } = await request.get(`/user?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('Token')}`,
                    }
                })
                const users = data.filter(user => user.role === 'Seller')
                return users

            }
            catch (error) {
                if (error.response) {
                    console.log(error.response.status);
                    if (error.response.status === 401 || error.response.status === 403) {
                        return logOut()
                    }
                }
            }

        }

    })

    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    const handleVerifySeller = (email) => {

        fetch(`https://used-cars-sale-server-sites.vercel.app/verifyseller?email=${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    toast.success('Seller Verify Success')
                    refetch()
                }
            })

    }


    const handledelete = (id) => {


        fetch(`https://used-cars-sale-server-sites.vercel.app/user/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Seller Delete Success')
                    refetch()
                }

            })
    }


    return (
        <div className='h-screen'>
            <h1 className='text-center text-xl font-semibold'>All Sellers</h1>

            <div className='px-4'>

                {
                    sellers.map((user, i) =>
                        <div key={user._id}>
                            <div className='flex  relative py-4 items-center mx-auto rounded-lg  gap-5 px-8 bg-white my-3 text-slate-800 font-semibold w-full md:w-[500px]'>
                                <p>{i + 1}.</p>
                                <div>
                                    <div className='flex gap-2'>
                                        <p>{user.name}</p>
                                        {
                                            user.verifySeller &&
                                            <p className='badge badge-primary'>
                                                verified
                                            </p>
                                        }</div>
                                    <p>{user.email}</p>
                                </div>
                                <div className="dropdown absolute right-4 dropdown-end">
                                    <label tabIndex={0} className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52">
                                        {
                                            !user?.verifySeller &&
                                            <li><button onClick={() => handleVerifySeller(user.email)} className=''>Verify Seller</button></li>
                                        }
                                        <li><button onClick={() => handledelete(user._id)}>Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default AllSellers;