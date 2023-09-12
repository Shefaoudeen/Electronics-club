import React from "react";
import PropTypes from  "prop-types";

import tamilbro from '../../assests/tamilbro.jpeg';
import hod from '../../assests/hod.jpg'

function Convenor(props) {
  return (
    <div className="flex md:flex-row flex-col">
    <section className="text-white bg-gray-900 body-font items-center text-center">
        <h1 className="text-5xl text-center font-rampart-one text-yellow-400 pt-10">Patron</h1>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className=" object-center h-[90%] lg:h-[80%] w-[30%] mx-auto lg:w-[70%]"
            src={hod}
          />
        </div>
        <div className="flex flex-col flex-wrap mx-auto lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start mx-auto items-center">
            <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="profile"><g data-name="<Group>"><path fill="#ed664c" d="M389.25 403.71v24.83a218.018 218.018 0 0 1-266.5 0V403.71a133.25 133.25 0 0 1 266.5 0zM304.09 124.82a67.514 67.514 0 1 1-47.64-19.67A67.064 67.064 0 0 1 304.09 124.82z"></path><path fill="#fdc75b" d="M256,38c120.4,0,218,97.6,218,218a217.579,217.579,0,0,1-84.75,172.54V403.71a133.25,133.25,0,0,0-266.5,0v24.83A217.579,217.579,0,0,1,38,256C38,135.6,135.6,38,256,38Zm67.76,134.46a67.158,67.158,0,1,0-19.67,47.63A67.064,67.064,0,0,0,323.76,172.46Z"></path><path d="M256,28A228.09,228.09,0,0,0,52.1,358.141a230.034,230.034,0,0,0,64.528,78.309,228.02,228.02,0,0,0,278.735,0A230.007,230.007,0,0,0,459.9,358.141,228.045,228.045,0,0,0,256,28ZM132.75,423.557V403.71a123.25,123.25,0,0,1,246.5,0v19.847a208.024,208.024,0,0,1-246.5,0Zm266.5-16.749v-3.1c0-78.988-64.262-143.25-143.25-143.25A143.257,143.257,0,0,0,112.75,403.71v3.1A206.439,206.439,0,0,1,48,256C48,141.309,141.309,48,256,48s208,93.309,208,208A206.444,206.444,0,0,1,399.25,406.808Z"></path><path d="M256.45,95.15a77.158,77.158,0,1,0,54.713,22.6A76.787,76.787,0,0,0,256.45,95.15Zm40.566,117.872a57.513,57.513,0,1,1,16.745-40.562A56.931,56.931,0,0,1,297.016,213.022Z"></path></g></svg>                </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
               Dr. V. Saminadan
              </h2>
              <p className="leading-relaxed text-base">
              B.Tech,M.Tech., Ph.D.,

              </p>
            </div>
          </div>
          <div className="flex flex-col  lg:items-center items-center">
            <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 `}>
              <img 
              src="data:image/png;base64,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"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
              Specialization 
              </h2>
              <p className="leading-relaxed text-base">
               <ul className="list-disc pl-8">
                <li>
                Optical Networks 
                </li>
               </ul>
              </p>
              <a href='https://ptuniv.edu.in/ece/faculty?id=56' target="_blank" className={`mt-3 text-${props.theme}-500 inline-flex items-center bg-amber-600 px-2 py-1 rounded-xl`}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>

<section className="text-white bg-gray-900 body-font items-center text-center">
<h1 className="text-5xl text-center font-rampart-one text-yellow-400 pt-10">Convenor</h1>
<div className="container px-5 py-10 mx-auto flex flex-wrap">
<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
  <img
    alt="feature"
    className=" object-center h-[90%] lg:h-[65%] w-[30%] mx-auto lg:w-[75%]"
    src={tamilbro}
  />
</div>
<div className="flex flex-col flex-wrap mx-auto lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
  <div className="flex flex-col mb-10 lg:items-start mx-auto items-center">
    <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-5`}>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="profile"><g data-name="<Group>"><path fill="#ed664c" d="M389.25 403.71v24.83a218.018 218.018 0 0 1-266.5 0V403.71a133.25 133.25 0 0 1 266.5 0zM304.09 124.82a67.514 67.514 0 1 1-47.64-19.67A67.064 67.064 0 0 1 304.09 124.82z"></path><path fill="#fdc75b" d="M256,38c120.4,0,218,97.6,218,218a217.579,217.579,0,0,1-84.75,172.54V403.71a133.25,133.25,0,0,0-266.5,0v24.83A217.579,217.579,0,0,1,38,256C38,135.6,135.6,38,256,38Zm67.76,134.46a67.158,67.158,0,1,0-19.67,47.63A67.064,67.064,0,0,0,323.76,172.46Z"></path><path d="M256,28A228.09,228.09,0,0,0,52.1,358.141a230.034,230.034,0,0,0,64.528,78.309,228.02,228.02,0,0,0,278.735,0A230.007,230.007,0,0,0,459.9,358.141,228.045,228.045,0,0,0,256,28ZM132.75,423.557V403.71a123.25,123.25,0,0,1,246.5,0v19.847a208.024,208.024,0,0,1-246.5,0Zm266.5-16.749v-3.1c0-78.988-64.262-143.25-143.25-143.25A143.257,143.257,0,0,0,112.75,403.71v3.1A206.439,206.439,0,0,1,48,256C48,141.309,141.309,48,256,48s208,93.309,208,208A206.444,206.444,0,0,1,399.25,406.808Z"></path><path d="M256.45,95.15a77.158,77.158,0,1,0,54.713,22.6A76.787,76.787,0,0,0,256.45,95.15Zm40.566,117.872a57.513,57.513,0,1,1,16.745-40.562A56.931,56.931,0,0,1,297.016,213.022Z"></path></g></svg>                </div>
    <div className="flex-grow">
      <h2 className="text-white text-lg title-font font-medium mb-3">
        Dr. S. Tamilselvan
      </h2>
      <p className="leading-relaxed text-base">
      B.E.,M.Tech., Ph.D., MISTE., MIEEE.,

      </p>
    </div>
  </div>
  <div className="flex flex-col  lg:items-center items-center">
    <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 `}>
      <img 
      src="data:image/png;base64,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"
      />
    </div>
    <div className="flex-grow">
      <h2 className="text-white text-lg title-font font-medium mb-3">
      Specialization 
      </h2>
      <p className="leading-relaxed text-base">
       <ul className="list-disc pl-8">
        <li>
         Wireless Communication and Networks 
        </li>
        <li>
        VLSI Design & Nano Electronics
        </li>
        <li>
        Image Processing
        </li>
        <li>
        Solid State Devices
        </li>
       </ul>
      </p>
      <a href='https://www.ptuniv.edu.in/ece/faculty?id=65' target="_blank" className={`mt-3 text-${props.theme}-500 inline-flex items-center bg-amber-600 px-2 py-1 rounded-xl`}>
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  
</div>
</div>
</section>
</div>
  );
}

Convenor.defaultProps = {
  theme: 'indigo'
};

Convenor.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Convenor;