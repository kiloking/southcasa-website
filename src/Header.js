import React from 'react'

function Header() {
  return (
    <div 
      className='w-full h-full bg-[#fff] relative  origin-center'
      
    >
      <div
        className='lg:hidden'
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_bg_mb.png'} alt="" className='w-full'/> 
      </div>

      <div
        className='inset-0 min-h-full z-0  hidden lg:block origin-center'
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_bg.png'} alt="" className='w-full'/> 
      </div>
      <div className='  absolute bottom-0 h-[10vh] md:h-[20vh] lg:h-[30vh] w-full origin-center '>
        <div className='aspect-square absolute right-0 bottom-0 animate-[pulse_3s_ease-in-out_infinite] h-full'>  
          <img src={process.env.PUBLIC_URL+'/images/rightbottom01.png'} alt="" className='max-w-full'/> 
        </div>
        <div className='aspect-square absolute right-0 bottom-0 animate-[pulse_3s_ease-in-out_infinite]  delay-[2000ms]  h-full'>  
          <img src={process.env.PUBLIC_URL+'/images/rightbottom02.png'} alt="" className='max-w-full'/> 
        </div>
        <div className='aspect-square absolute left-0 bottom-0 animate-[pulse_3s_ease-in-out_infinite]    h-full'>  
          <img src={process.env.PUBLIC_URL+'/images/leftbottom01.png'} alt="" className='max-w-full'/> 
        </div>
        <div className='aspect-square absolute left-0 bottom-0 animate-[pulse_3s_ease-in-out_infinite]  delay-[2000ms]  h-full'>  
          <img src={process.env.PUBLIC_URL+'/images/leftbottom02.png'} alt="" className='max-w-full'/> 
        </div>
      </div>


      <div className='flex justify-center absolute w-full h-full gap-5 top-0 pt-20'>
        <div className='w-5/6 lg:w-5/6 mx-auto flex justify-center items-center flex-col '>
          <div className='block mb-[8%] lg:mb-[7%] w-4/5'  data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/open/header_title.png'} alt="" className='max-w-full w-2/3 mx-auto'/>
          </div>  


          <div className='w-5/6 lg:w-3/6  mx-auto  mb-[20%] lg:mb-[5%]'  data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
            <div className='block'><img src={process.env.PUBLIC_URL+'/images/open/header_subtitle.png'} alt="" className='max-w-full mb-10 mx-auto'/></div>  
          </div>

        </div>
 
      </div>
    </div>
  )
}

export default Header