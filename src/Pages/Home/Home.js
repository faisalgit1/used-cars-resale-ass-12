import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Advertise from './Advertise';
import Catagories from './Category';
import Contact from './Contact';
import Features from './Features';
import Header from './Header'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Advertise></Advertise>
            <Catagories></Catagories>
            <Features></Features>
            <Contact></Contact>
        </div>
    );
};

export default Home;