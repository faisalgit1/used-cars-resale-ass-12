import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <section className='gap-16 items-center grid grid-cols-1 lg:grid-cols-2 py-20'>
            <div data-aos='fade-up' data-aos-duration='1500'>
                <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>Men's Haircuts and Hairstyles.</h1>
                <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>The barber shop used to be more than just a place to get a new hairstyle or a fresh cut - it was a community center.</p>
                <Link to='/services' className='bg-theme-default text-white px-6 py-4 rounded-full inline-block'>Get Start Now</Link>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJN1c4loWUyZz7IHCZrCAYx3J4oAXxXiI7i7G-MIDrw&s' alt="" />
            </div>
        </section>
    );
};

export default Hero;