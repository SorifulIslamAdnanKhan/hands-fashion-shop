import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;