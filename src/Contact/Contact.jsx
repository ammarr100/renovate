import React from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css'

function Contact() {
  return(
      <>
          <section className='contact'>
          <div className='contact-container container'>
                <div className='contact-items'>
                    <div className='contact-textbox1'>
                        <h1> Call Us</h1>
                        <p>1 (234) 567-591, 1 (434) 687-654</p>
                        <h1>LOCATION</h1>
                        <p>123 New South Wales Sydney Australia, 2000</p>
                        <h1>BUSINESS HOURS</h1>
                        <p>Mon - Fri …… 10 am - 8 pm, Sat, Sun ....… Closed</p>
    </div>
    <div className='contact-textbox2'>
        <input type="text" name="" id="" placeholder='Enter your Name' />
        <input type="Email" name="" id="" placeholder='Enter a Valid Email Address' />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <NavLink to="/" className='btn-contact'>Submit</NavLink>
    </div>
                </div>
          </div>

          </section>
      </>
  )
}

export default Contact;
