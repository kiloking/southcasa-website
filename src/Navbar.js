import React from 'react'

function Navbar() {
  return (
    <div className='py-4 bg-[#e4e4e400] absolute w-full top-0 z-50 pr-3' data-aos="fade-down" data-aos-duration="1000" data-aos-delay='1000'>
      <img src={process.env.PUBLIC_URL+'/images/open/navbar_logo.png'} alt="" className=' absolute top-0 left-1/2 transform -translate-x-1/2  max-w-full w-[80px] lg:w-[110px] hidden' />
      <div className='flex gap-5 justify-start items-end ml-6'>
        <a href="https://www.facebook.com/people/%E6%98%95%E6%9A%89%E8%A9%A0%E7%BF%A0/100086047560305/"  target="_blank" rel="noreferrer">
          <div className='flex flex-col items-center justify-end gap-2 '>
            <img src={process.env.PUBLIC_URL+'/images/open_v2/fbicon.png'} alt="" className='w-[25px] lg:w-[40px] transition-all duration-500'/>
            <div className=' tracking-widest text-[#223553] font-bold hidden md:block'>粉絲專頁</div>
          </div>
          
        </a>
        <a href="https://www.google.com/maps?ll=23.05468,120.211805&z=14&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=%E6%96%B0%E5%AE%85+709%E5%8F%B0%E5%8D%97%E5%B8%82%E5%AE%89%E5%8D%97%E5%8D%80" target="_blank" rel="noreferrer">
          <div className='flex flex-col items-center gap-2'>
            <img src={process.env.PUBLIC_URL+'/images/open_v2/mapicon.png'} alt="" className='w-[20px] lg:w-[32px] transition-all duration-500'/>
            <div className=' tracking-widest text-[#223553] font-bold hidden md:block'>地圖導航</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar