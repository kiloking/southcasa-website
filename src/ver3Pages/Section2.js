import React from 'react'

function Section2() {
  return (
    <div className='md:py-20 relative'>
      <div className='w-10/12 mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 p-10'>
            <img src={process.env.PUBLIC_URL+'/images/open_v3/section2_text.png'} alt="" className='md:p-10' />
          </div>
          <div className='md:w-1/2'>
            <img src={process.env.PUBLIC_URL+'/images/open_v3/section2_p01.png'} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2