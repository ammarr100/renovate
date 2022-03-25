import React from 'react';
import './Repair.css'

function Repair({repairHeading, repairText}) {
  return(
      <>
          
                <div className='repair-items'>
                    <h1>{repairHeading}</h1>
                    <p>{repairText}</p>
                </div>
                
            
      </>
  )
}

export default Repair;
