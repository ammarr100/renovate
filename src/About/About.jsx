import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'
function About() {
  return (
      <>
          <section className='about'>
            <div className='aboutus container'>
                <h1>About Us</h1>
                <p>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
                <NavLink to="/about" className='btn-about'>Learn More</NavLink>
            </div>
          </section>
      </>
  )
}

export default About;
