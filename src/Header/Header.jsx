import React from 'react';
import './Header.css'
import header2 from '../img/header02.png'
import header1 from '../img/header01.jpg'
import { NavLink } from 'react-router-dom';

function Header() {
  return(
      <>
        <section className='showcase'>
            <div className='header container'>
                <div className='header-textarea'>
                <h1>Home Repair</h1>
                <h2>& Renovating</h2>
                <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <NavLink to="/" className='btn-header'>Read More</NavLink>
                </div>
  <div className='header-imagearea'>
  <img src={header1} alt="" />
      
  </div>
            </div>
            {/* <div className='header-overlay'> 
  <div className='position-absolute'>
  <img src={header2} alt="" />
  </div>
  
  </div> */}
        </section>
      </>
  )
}

export default Header;
