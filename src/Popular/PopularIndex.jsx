import React from 'react';
import Pdata from './Pdata';
import Popular from './Popular';

function PopularIndex() {
  return (
      <>

<section className='popular'>
<div className='popular-textarea container'>
                        <h1>Popular Services</h1>
                        <p>As a customer-focused solution provider, we're dedicated to redefining the home improvement service experience for homeowners and commercial property owners.</p>
                    </div>
                <div className='popular-container container'>
                    
      {
          Pdata.map((items,index)=>(
            <Popular
                popImage={items.popImage}
                popHeading={items.popHeading}
                popText={items.popText}
                key={items.popHeading + index}
            />
          ))
      }

      </div>
          </section>
          
      </>
  )
}

export default PopularIndex;
