import React, {useState} from 'react';
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import Desktop from './Desktop';
import Mobile from './Mobile';
import Signup from './Signup';
import SignupMobile from './SingupMobile';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [toggle,setToggle] = useState(false)
    const openHam = <FiMenu onClick={()=>setToggle(!toggle)}/>
    const closeHam = <CgClose onClick={()=>setToggle(!toggle)}/>

  return(
      <>
      <section className='navbar'>
            <div className='navbar-desktop'>
                <div className='desktop-container'>
                    <div className='logo'>
                        
                        <NavLink to="/">Logo</NavLink>
                    </div>
                
                <div className='desktop-menulinks'>
                        <Desktop/>                        
                    </div>
                    
    <div className='signup-hamicon'>
        <div className='signup-menulinks'>
        <Signup/>
        </div>
                    
        <div className='ham-icon'>
            {
                toggle ? closeHam : openHam
            }
        </div>
        </div>
                </div>
            </div>

            {/* ******** Mobile Menu********* */}
            <section className='navbar-mobile'>
        <div className='mobile-container'>          
        
            <div className='mobile-menulinks'>
            
                {
                    toggle && <Mobile/>
                    
                }
              
                
            
            </div>

        </div>
      </section>
      </section>

      </>
  )
}

export default Navbar;
