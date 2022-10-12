import React from 'react'

function Header() {
  return (
    <div className='w-full h-full bg-[#3C1743] relative lg:min-h-screen'>
      <div
        className='lg:hidden'
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_bg_mb.png'} alt="" className='w-full'/> 
      </div>
      <div
        className='inset-0 min-h-screen absolute  bg-center bg-no-repeat bg-cover  z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
      </div>

      <div className='flex justify-center absolute w-full h-full gap-5 top-0'>
        <div className='w-5/6 lg:w-5/6 mx-auto flex justify-center items-center flex-col '>
          <div className='w-1/5 lg:w-auto mx-auto mb-[12%] lg:mb-[5%] '  data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
            <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='max-w-full'/>
          </div> 
          <div className='hidden lg:block mb-[8%] lg:mb-[7%]'  data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='max-w-full w-4/5 mx-auto'/>
          </div>  
          <div className='lg:hidden mb-[14%] lg:mb-[5%] w-3/5'  data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
            <img src={process.env.PUBLIC_URL+'/images/header_title_mb.png'} alt="" className='max-w-full'/>
          </div>  

          <div className='w-5/6 lg:w-3/6  mx-auto  mb-[20%] lg:mb-[15%]'  data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
            <div className='hidden lg:block'><img src={process.env.PUBLIC_URL+'/images/header_subtitle.png'} alt="" className='max-w-full mb-10'/></div>  
            <div className='lg:hidden'><img src={process.env.PUBLIC_URL+'/images/header_subtitle.png'} alt="" className='max-w-full mb-5'/></div>  
          </div>

        </div>
 
      </div>
    </div>
  )
}

export default Header