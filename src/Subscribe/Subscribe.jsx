import React from 'react';
import './Subscribe.css'
import image from '../img/popular-03.jpg'
import { NavLink } from 'react-router-dom';

function Subscribe() {
return(
        <>
        <section className='subscribe'>
            <div className='sub-container'>
            <div className='sub-items'>
            
                <div className='sub-image'>
                    <img src={image} alt="" />
                    <div className='overlay'></div>
                </div>
                <div className='sub-text'>
                    <h1>Subscribe</h1>
                    <p>We offer educational and repair services for homeowners. Depending on your household size and income, you may qualify for home repair assistance. See what we can help you with today!</p>
                    <NavLink to="/" className='btn-sub'>Read More</NavLink>
                </div>
                
            </div>
            

            </div>
        </section>
        </>
)
}

export default Subscribe;