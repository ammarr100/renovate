import React from 'react';
import { NavLink } from 'react-router-dom';
import Rdata from './Rdata';
import Repair from './Repair';

function RepairIndex() {
  return(
      <>

            <section className='repair'>
            <div className='repair-heading container'>
            <h1>Home Repair Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, perspiciatis?</p>
            </div>
            
        <div className='repair-container container'>
      {
          Rdata.map((items, index)=>(
            <Repair
            repairHeading={items.repairHeading}
            repairText={items.repairText}
            key={items.repairHeading + index}

            />
          ))
      }
            
            </div>
            <div className='container btn-position'>
                    <NavLink to="/services" className='btn-repair'>Read More</NavLink>
                </div>
            
          </section>
      </>
  )
}

export default RepairIndex;
