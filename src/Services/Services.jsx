import React from 'react';
import './Services.css'

function Services({icons, serviceHeading, serviceTextArea}) {
  return(
    <>
        
                <div className='service-items'>
                <img src={icons} alt="" />
                    <h1>{serviceHeading}</h1>
                    <p>{serviceTextArea}</p>
                </div>

            
        

    </>

  )
}

export default Services;
