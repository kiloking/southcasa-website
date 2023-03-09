import React from 'react'

function Page2() {
  return (
    <div
      className='pt-[126.64%] w-full bg-cover bg-no-repeat bg-center relative'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open_v2/page2_bg.png'})`}}
    >
      <div className=' absolute -bottom-[9%]'>
        <img src={process.env.PUBLIC_URL+'/images/open_v2/page2_pic1.png'} alt="" className='max-w-full w-4/5'/>
      </div>
      
    </div>
  )
}

export default Page2