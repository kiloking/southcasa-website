import React from 'react'

function Section1() {
  return (
    <div className='py-20 relative'>
      <div className='w-10/12 mx-auto'>
        <img src={process.env.PUBLIC_URL+'/images/open_v3/section1_p01.png'} alt="" className='max-w-full'/>
      </div>

      <div className=' absolute left-[5%] -bottom-[14%]'>
        <img src={process.env.PUBLIC_URL+'/images/open_v3/section1_bird.png'} alt="" className='w-[20%] md:w-[50%]' />
      </div>
    </div>
  )
}

export default Section1