import React from 'react';
import './Popular.css'

function Popular({popImage, popHeading, popText}) {
  return (
      <>
          
                    
                        <div className='popular-image'>
                            <img src={popImage} alt="" />
                            <h1>{popHeading}</h1>
                            <p>{popText}</p>                            
                        </div>
                    
                
      </>
  )
}

export default Popular;
