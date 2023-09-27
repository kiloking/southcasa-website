import React from 'react'

function Header() {
  return (
    <div 
      className='w-full md:h-full bg-[#fff] relative  origin-center'
      
    >
      <div className='w-full'>
        <img src={process.env.PUBLIC_URL+'/images/open_v3/header_bg-2.jpg'} alt="" className='w-full '/>
      </div>

     


    
    </div>
  )
}

export default Header