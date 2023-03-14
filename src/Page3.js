import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Page3() {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0) 
  const handleClick = (index) =>{
    swiper.slideTo(index)
  }
  const imgs = [
    {image:"p01.png"},
    {image:"p02.png"},
    {image:"p03.png"},
  ]
  return (
    <div 
      className='bg-cover bg-center bg-fixed'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open/page_bg.png'})`}}
    >
      <div className='bg-[#223553] flex justify-center py-6'>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_title.png'} alt="" className='max-w-full w-1/5'/>
      </div>
      <div className='flex flex-col justify-center items-center gap-10 pt-20'>
        <img src={process.env.PUBLIC_URL+'/images/open_v2/page3_pic1.png'} alt="" className='max-w-full w-10/12'/>
        <div className='flex mt-10 w-4/5 gap-4 md:gap-10 pt-5 md:pt-20 items-end justify-center'>
          <div className='w-2/5 mb-10 md:mb-20'>
            <img src={process.env.PUBLIC_URL+'/images/open_v2/page3_pic2_1.png'} alt="" className='max-w-full'/>
          </div>
          <div className='w-3/5'>
            <img src={process.env.PUBLIC_URL+'/images/open_v2/page3_pic2_2.png'} alt="" className='max-w-full  '/>
          </div>
          

        </div>
      </div>
      <div>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={30}
        slidesPerView={2.5}
        loop={true}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination]}
        centeredSlides={true}
 
        className="mySwiper"
        onSlideChange={(swiperCore)=>{
          const {
            activeIndex,
            snapIndex,
            previousIndex,
            realIndex,
          } = swiperCore;
          console.log({ activeIndex, snapIndex, previousIndex, realIndex });
          setCurrentIndex(activeIndex)
        }}
      >
        {
          imgs.map((item,index)=>{
            return(
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/open/env/'+ item.image} alt="" /></SwiperSlide>
            )
          })
        }
      </Swiper>



      </div>
      <div className='flex flex-col justify-center items-center gap-10  relative pt-14 pb-20 lg:pb-48'>
        <img src={process.env.PUBLIC_URL+'/images/open_v2/page3_pic3.png'} alt="" className='max-w-full w-4/5'/>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_pic4_2.png'} alt="" className='max-w-full w-2/6 absolute -top-[40px] left-0'/>
      </div>
      <div className='flex justify-end  '>
        
      </div>

      
      
    </div>
  )
}

export default Page3