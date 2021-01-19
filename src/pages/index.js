import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero'
import Content from '../components/Content/Content'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Content/Data';
import Banner from '../components/Banner/Banner';
import { bannerOne, bannerTwo, bannerThree } from '../components/Banner/Data';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <Banner {...bannerOne}/>
            <Content {...homeObjOne}/>
            <Banner {...bannerTwo}/>
            <Cards />
            <Banner {...bannerThree}/>
            <Content {...homeObjTwo}/>
            <Banner {...bannerOne}/>
            <Cards />
            <Banner {...bannerOne}/>
            <Content {...homeObjThree}/>
            

            <Footer />
    
            
        </div>
    )
}

export default Home;
