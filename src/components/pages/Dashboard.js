import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import hero from '../../assests/hero.png'

const Dashboard = () => {
    AOS.init();
  return (
    <div>
    <section class="bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Electronics Club</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Puducherry Technological University</p>
            <p  class="inline-flex items-center justify-center  py-3 text-base font-medium text-left text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Nestled within the vibrant campus of Puducherry Technological University (PTU), the Electronics Club
stands as a beacon of innovation, learning, and collaboration. Dedicated to fostering a deep passion
for electronics and technology, this club serves as a hub for budding engineers to explore,
experiment, and excel in the realm of electronics.
            </p>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img data-aos="fade-left"
     data-aos-anchor-placement="center-right" data-aos-duration="2000"src={hero} alt="mockup"/>
        </div>                
    </div>
</section>


<section
      className=' bg-gray-900'
      id="#About"
      

    >


      <div className='container  rounded-3xl  mx-auto bg-blue-300'>
           
      <h1 className="text-3xl pl-4 font-bold text-pink-600 font-graduate  py-4">Motto</h1>
        <div className='  px-12 flex flex-col text-center xl:flex-row xl:items-center xl:  xl:gap-x-[60px] xl:pb-0    '>
          <div className='flex-1 '>
           
            <p data-aos='fade-left' data-aos-delay='400'
              className=' pt-4 italic	pb-10  text-3xl md:px-12 text-center text-black  mx-auto'
            >
“inventio et ingenium”
            </p>   
          </div>
        </div> 
      </div>
    </section>
</div>
  )
}

export default Dashboard