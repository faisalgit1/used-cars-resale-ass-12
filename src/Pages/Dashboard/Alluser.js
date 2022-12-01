import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import request from '../../http-request-axios';


const Alluser = () => {
    useTitle('All Users')
    const { user, logOut } = useContext(AuthContext)
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-cars-sale-server-sites.vercel.app/user?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                return logOut()
            }
            else {
                const data = await res.json()
                return data

            }
        }
    })




    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }


    const handleMakeAdmin = id => {
        fetch(`https://used-cars-sale-server-sites.vercel.app/user/admin/${id}?email=${user?.email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Now You are Admin')
                    refetch()

                }
            })

    }

    const handledelete = (id) => {


        request.delete(`/user/${id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(data => {
                toast.success('Buyer Delete Success')
                refetch()

            })
    }

    return (
        <div className='h-screen'>
            <h1 className='text-center text-xl font-semibold'>All Users</h1>

            <div className='px-4'>

                {
                    users.map((user, i) =>
                        <div key={user._id}>
                            <div className='flex  relative py-4 items-center mx-auto rounded-lg  gap-5 px-8 bg-white my-3 text-slate-800 font-semibold w-full md:w-[500px]'>
                                <p>{i + 1}.</p>
                                <div>
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                </div>
                                <div className="dropdown absolute right-4 dropdown-end">
                                    <label tabIndex={0} className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52">
                                        <li><button onClick={() => handleMakeAdmin(user._id)} className=''>
                                            {
                                                user.role === 'admin' ? 'Admin' : 'Make Admin'
                                            }
                                        </button></li>

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

export default Alluser;