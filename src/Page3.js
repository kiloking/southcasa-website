import React from 'react'

function Page3() {
  return (
    <div 
      className='bg-cover bg-center bg-fixed'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open/page_bg.png'})`}}
    >
      <div className='bg-[#223553] flex justify-center py-6'>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_title.png'} alt="" className='max-w-full w-1/5'/>
      </div>
      <div className='flex flex-col justify-center items-center gap-10 py-20'>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_pic1.png'} alt="" className='max-w-full w-4/5'/>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_pic2.png'} alt="" className='max-w-full w-5/6 mt-10'/>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_imgs.png'} alt="" className='max-w-full w-full'/>
      </div>
      <div className='flex flex-col justify-center items-center gap-10  relative pt-14 pb-20 lg:pb-48'>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_pic3.png'} alt="" className='max-w-full w-4/5'/>
        <img src={process.env.PUBLIC_URL+'/images/open/page3_pic4.png'} alt="" className='max-w-full w-2/6 absolute bottom-0 right-0'/>
      </div>
      <div className='flex justify-end  '>
        
      </div>

      
      
    </div>
  )
}

export default Page3