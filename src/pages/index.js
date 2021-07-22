import React, {useState} from 'react';
import { SideBar } from '../components/sidebar';
import Navbar from '../components/navbar';
import { HeroSection } from '../components/hero-section';
import InfoSection from '../components/info-section';
import { HomeObj1, HomeObj2, HomeObj3 } from '../components/info-section/data';
import Services from '../components/services';
import Footer from '../components/footer';

export const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); 
    }

    return (
        <>
         <SideBar isOpen= { isOpen } toggle={ toggle }/>
         <Navbar toggle= { toggle }/> 
         <HeroSection />
         <InfoSection {...HomeObj1}/>  
         <InfoSection {...HomeObj2}/>
         <Services />  
         <InfoSection {...HomeObj3}/> 
         <Footer /> 
        </>
    ) 
};
