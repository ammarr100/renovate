import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Help from './Help/Help';
import Navbar from './Navbar/Navbar';
import PopularIndex from './Popular/PopularIndex';
import RepairIndex from './Repair/RepairIndex';
import ServiceIndex from './Services/ServiceIndex';
import Subscribe from './Subscribe/Subscribe';


function Home() {
  return (
  <>
        <Navbar/>
        <Header/>
        <ServiceIndex/>
        <About/>
        <Help/>
        <PopularIndex/>
        <RepairIndex/>
        <Subscribe/>
        <Contact/>
        <Footer/>
       
        
  </>
  )
}

export default Home;
