import React from 'react';
import SData from './SData';
import Services from './Services';

function ServiceIndex() {
  return (
      <>

        <section className='services'>
        {/* <h1>heading</h1> */}
            <div className='services-container container'>
      
      {
        SData.map((items, index)=>(
            <Services
            icons={items.icons}
            serviceHeading={items.serviceHeading}
            serviceTextArea={items.serviceTextArea}
            key={items.serviceHeading + index}
            />
        ))
      }
      </div>
        </section>
      
          
      </>
  )
}

export default ServiceIndex;
