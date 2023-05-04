import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

function Section5() {
  const imgs = [
    {image:"p01.png"},
    {image:"p02.png"},

  ]
  return (
    <div className='py-10 md:py-20 relative'>
      <div className='w-10/12 mx-auto'>
        <div className='flex flex-col md:flex-row'>
          
        <div className='md:w-1/2 p-10'>
          <img src={process.env.PUBLIC_URL+'/images/open_v3/section5_text.png'} alt="" className='md:p-10' />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination]}
          centeredSlides={true}
          className='w-full md:w-1/2'
        >
          {
            imgs.map((item,index)=>{
              return(
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/open_v3/section5pic/'+ item.image} alt="" /></SwiperSlide>
              )
            })
          }
        </Swiper>

        </div>
      </div>
    </div>
  )
}

export default Section5