import React from 'react'

import main from '../../assests/event21/main.jpg';
import Event1 from '../../assests/event21/Event1.jpg';
import Event2 from '../../assests/event21/Event2.png';
import Event3 from '../../assests/event21/Event3.jpg';
import Event4 from '../../assests/event21/Event4.png';
import Event5 from '../../assests/event21/Event5.jpg';


import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;
const Former = () => {
    
  return (
   
    <div>
          <div className="bg-gray-900 py-4">
            <h1 className='text-center text-5xl font-rampart-one text-blue-400'>Former Events:</h1>

            <Carousel className="pt-[30px] w-[90%] h-full sm:w-[40%] mx-auto" dynamicHeight={true} infiniteLoop  showThumbs={false}>
               
            <div>
            <img src={main} height="100px" width="100px"/>
            </div>

            <div>
            <img src={Event1} height="100px" width="200px"/>
           
            </div>
            <div>
            <img src={Event2} height="100px" width="200px"/>
           
            </div>
            <div>
            <img src={Event3} height="100px" width="200px"/>
           
            </div>
            <div>
            <img src={Event4} height="100px" width="200px"/>
           
            </div>
            <div>
            <img src={Event5} height="300px" width="200px"/>
           
            </div>
        
      
            </Carousel>
            </div>
        </div>
  )
}

export default Former