import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Advertise from './Advertise';
import Header from './Header'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div>
                <marquee className="bg-gray-600 h-14 flex items-center">
                    <h1 className='text-3xl font-bold mq-text text-red-600'>Hot Car Sales Sites!</h1>
                </marquee>
            </div>
            <Header></Header>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;