import React from 'react'

function Navbar() {
  return (
    <div className='py-4 bg-[#223553] fixed w-full top-0 z-50 pr-3'>
      <img src={process.env.PUBLIC_URL+'/images/open/navbar_logo.png'} alt="" className=' absolute top-0 left-1/2 transform -translate-x-1/2  max-w-full w-[80px] lg:w-[110px] ' />
      <div className='flex gap-5 justify-end items-center '>
        <a href="tel:063560852" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open/icon_facebook.png'} alt="" className='w-[30px] lg:w-2/3'/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open/icon_contact.png'} alt="" className='w-[30px] lg:w-2/3'/>
        </a>
        <a href="https://www.google.com/maps?ll=23.05468,120.211805&z=14&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=%E6%96%B0%E5%AE%85+709%E5%8F%B0%E5%8D%97%E5%B8%82%E5%AE%89%E5%8D%97%E5%8D%80" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+'/images/open/icon_map.png'} alt="" className='w-[30px] lg:w-2/3'/>
        </a>
      </div>
    </div>
  )
}

export default Navbar