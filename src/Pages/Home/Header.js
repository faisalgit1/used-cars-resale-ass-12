import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/mazda.png'

const Header = () => {
    return (
        <div>
            <div>
                <marquee className="bg-gray-600 h-14 flex items-center">
                    <h1 className='text-3xl font-bold mq-text text-red-600'>Hot Car Sales Sites!</h1>
                </marquee>
            </div>
            <section className="relative bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pNSzID_6Tqjz_M3gwsxliTDX9blkA-RERA&usqp=CAU)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Welcome To Resale
                            <strong className="block font-extrabold text-rose-700">
                                Cars World.
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            This is a used car selling website. This website will regularly upload photos with all the information of old cars for selling old cars. Those who like can buy. Even those who apply here to sell old cars can create a seller account and sell their used cars.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to="/blogs" className="block w-full rounded bg-[#BE123B] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#541624]  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                Our Blogs
                            </Link>
                            <button href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;