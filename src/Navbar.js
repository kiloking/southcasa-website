import React from 'react'

function Navbar() {
  return (
    <div className='py-4 bg-[#e4e4e4ab] shadow-md  fixed w-full top-0 z-50 pr-3'>
      <img src={process.env.PUBLIC_URL+'/images/open/navbar_logo.png'} alt="" className=' absolute top-0 left-1/2 transform -translate-x-1/2  max-w-full w-[80px] lg:w-[110px] ' />
      <div className='flex gap-5 justify-start items-center ml-6'>
        <a href="https://www.facebook.com/"  target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open_v2/header_fbicon.png'} alt="" className='w-[30px] lg:w-1/2 '/>
        </a>
        <a href="https://www.facebook.com/"  target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open_v2/header_fbmsgicon.png'} alt="" className='w-[30px] lg:w-1/2'/>
        </a>
        <a href="https://www.google.com/maps?ll=23.05468,120.211805&z=14&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=%E6%96%B0%E5%AE%85+709%E5%8F%B0%E5%8D%97%E5%B8%82%E5%AE%89%E5%8D%97%E5%8D%80" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open_v2/header_mapicon.png'} alt="" className='w-[30px] lg:w-1/2'/>
        </a>
      </div>
    </div>
  )
}

export default Navbar