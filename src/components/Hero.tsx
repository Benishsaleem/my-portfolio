import React from 'react'
import Navebar from './Navebar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner.jpg)]'
    style={{backgroundSize:"30%" , backgroundPosition:"left 150px top 150px"}}>

      <Navebar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px'>
        <div className='hidden lg:block'></div>
        <div className='text-[45px] sm:text-[60px] font-serif leading-tight pt-32 '>
          <div className='text-gray-400'>
            <p  data-aos="zoom-in-down">Hi,</p>
            <p  data-aos="zoom-in-down">I am</p>  
            <p  data-aos="zoom-in-down">Benish Saleem</p>
            <p data-aos="zoom-in-down">"Web Developer"</p>
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero