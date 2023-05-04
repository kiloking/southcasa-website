import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section4() {
  const imgs = [
    {image:"p01.png"},
    {image:"p02.png"},
    {image:"p03.png"},
    {image:"p04.png"},
    {image:"p05.png"},
  ]
  return (
    <div className='py-10 md:py-20 relative'>
      <div className='w-10/12 mx-auto'>
         <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination]}
          centeredSlides={true}
          className='md:w-4/5'
        >
          {
            imgs.map((item,index)=>{
              return(
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/open_v3/section4pic/'+ item.image} alt="" /></SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Section4