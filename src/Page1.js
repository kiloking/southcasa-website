import React,{useState} from 'react'

function Page1() {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div className=' w-full  relative'>
      {isDisplay ?
          <div className='bg-[#00000080] w-full h-full sm:min-h-70vh  absolute top-0 z-10 flex items-end justify-center lg:hidden' onClick={()=>setIsDisplay(!isDisplay)}>
            <div className="bottom-0 w-4/5 sm:w-3/5 items-center pb-20">
              <img src={process.env.PUBLIC_URL+'/images/section1_icon1.png'} alt="" className='w-full'/>

              <img src={process.env.PUBLIC_URL+'/images/section1_icon2.png'} alt="" className='animate-slide-flow tesxt-scenter block mx-auto w-1/5'/>
        
            </div>
          </div> : ''
        }
      <div className='aspect-[747/1200]  w-full  relative  z-0  lg:hidden overflow-x-scroll'> 

        <div className='w-[300vw]  h-full lg:min-h-[70vh] overflow-x-hidden overflow-y-hidden bg-bottom bg-cover bg-no-repeat transition-width'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open/page1_map.png'})`}}
        >
        </div>


      </div>  
      <div
        className='pt-[46.64%] w-full bg-cover bg-no-repeat bg-center hidden lg:block'
       style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/open/page1_map.png'})`}}
       >
      </div>
    </div>
  )
}

export default Page1