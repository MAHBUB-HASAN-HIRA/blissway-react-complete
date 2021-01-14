import React from 'react';
import Blissway from '../Blissway/Blissway';
import FastLanes from '../FastLanes/FastLanes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HowBlissway from '../HowBlissway/HowBlissway';
import LanesDirection from '../LanesDirection/LanesDirection';
import NewsLatter from '../NewsLatter/NewsLatter';
import NewTake from '../NewTake/NewTake';
import TheWhy from '../TheWhy/TheWhy';

const Home = () => {
    return (
        <section className='main-content-wrap'>
            <Header/>
            <FastLanes/>
            <LanesDirection/>
            <Blissway/>
            <NewTake/>
            <TheWhy/>
            <HowBlissway/>
            <NewsLatter/>
            <Footer/>
        </section>
    );
};

export default Home;

