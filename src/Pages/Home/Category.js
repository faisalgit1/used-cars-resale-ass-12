import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {

    const { data: categorires, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://used-cars-sale-server-sites.vercel.app/categories')
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full text-center animate-spin dark:border-violet-400"></div>
    }

    return (
        <div className='my-2 md:my-20'>
            <h1 className='text-center mb-6 text-3xl font-semibold'>Categories </h1>

            <div className='flex flex-col md:flex-row px-20 gap-5 md:gap-0 items-center justify-around'>
                {
                    categorires.map((category, i) =>
                        <div key={i}>
                            <Link to={`/cars/${category.name}`}>
                                <button className="block w-full rounded bg-[#BE123B] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#541624]  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">{category.name}</button>
                            </Link>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Catagories;