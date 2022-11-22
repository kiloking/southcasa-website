import React from 'react'

function Page1() {
  return (
    <div 
      className='pt-[46.64%] w-full bg-cover bg-no-repeat bg-center'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open/page1_map.png'})`}}
    ></div>
  )
}

export default Page1