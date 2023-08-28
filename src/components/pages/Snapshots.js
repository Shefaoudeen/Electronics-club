import React from 'react';

import one from '../../assests/snap/one.png';
import two from '../../assests/snap/two.png';
import three from '../../assests/snap/three.png';
import four from '../../assests/snap/four.png';
import offb from '../../assests/offb.jpg';
import logowp from '../../assests/logowp.jpeg';

const Snapshots = () => {
  return (
    <div className='bg-gray-900 pt-10'>

        <h1 className='text-5xl text-center text-green-400 font-rampart-one'>Snapshots</h1>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={one} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={offb} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={three} />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={four} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={two} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={logowp} />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Snapshots