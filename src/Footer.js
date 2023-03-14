import React,{useState,useEffect} from 'react'
import { FaPhoneAlt,FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, reset } from "react-hook-form";
import Modal from './Components/Modal';
import taiwan_districts from './Components/taiwan_districts.json'
function Footer() {
  const [msgMailTitle,setMsgMailTitle] = useState('詠翠網站的表單')
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      name:"",
      tel: "",
      mail: "",
      house_types:"",
      area:"",
      main_district:"",
      sub_district:"",
    }
  });
  const [subDistricts , setSubDistricts] = useState(taiwan_districts[0].districts)
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    let url2 = process.env.PUBLIC_URL+'/api/contact/index.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  const handleChange = (e)=>{
    console.log(e.target.value)
    let cityName = e.target.value
    const result = taiwan_districts.find(item =>{
      return item.name === cityName
    })
    setSubDistricts(result.districts)

  }


  return (
    <div className='w-full py-10 bg-[#223553]'>
      {formStatus &&
       <Modal>
        <div className='bg-[#00000080] w-full h-full  absolute inset-0 z-0  ' onClick={()=>setFormStatus(!formStatus)}></div>
        <div className={` absolute z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-white mx-auto px-5 py-4  rounded-sm border-slate-200 w-2/5`}>
          <div className='text-base font-bold mt-5 pb-5'> 表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！</div>
        
        </div>
       </Modal> 
      }
      {isOpen && 
      <Modal>
        <div className='bg-[#00000080] w-full h-full  absolute inset-0 z-0  ' onClick={()=>setIsOpen(!isOpen)}></div>
        <div className=' absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-3/5 h-4/5 bg-white mx-auto px-10 py-10 rounded-sm border-slate-200 overflow-y-scroll'>
          <div className='text-lg font-bold mt-4 border-b-1 border-[#999] pb-15'>個人資料保護政策暨隱私權聲明</div>
          <div className='text-base  text-zinc-500 leading-8 mb-6 mt-6'>昌鴻國際建設（下稱「本公司」）依據個人資料保護法，向您告知以下隱私權政策規範，若您勾選「我同意隱私權政策」，將表示您已同意本公司之隱私權政策，並同意本公司依以下告知事項，就您的個人資料進行蒐集、處理及利用。您可以自由選擇是否提供相關個人資料，若您拒絕，本公司將可能無法執行本告知事項蒐集目的之業務，致無法向您提供相關服務：</div>

          <div className='text-lg ont-bold mt-4'>一、蒐集目的和使用方式：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司依據個人資料保護法及相關法令之規定，為了提供您登錄網站、索取資料、訂閱資訊、反應意見、進行各種諮詢等服務；或為了與您聯繫、行銷（包括但不限於廣告及各項商品、活動、促銷、優惠訊息之通知等）、執行消費者及客戶管理分析、執行各種公司營業登記項目或組織章程所定業務範圍內之必要行為，對您的個人資料進行蒐集、處理、利用及國際傳輸。</div>

          <div className='text-lg ont-bold mt-4'>二、蒐集之個人資料類別：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司向您蒐集的個人資料，依據「個人資料保護法之特定目的及個人資料之類別」，包含但不限於識別類、特徵類、社會情況、財務細節、商業資訊或其他等類別，例如姓名、行動電話、住家、辦公室電話號碼、E-mail、地址、身分證統一編號、性別、出生年月日或其他得以直接或間接識別您個人之資料。</div>

          <div className='text-lg ont-bold mt-4'>三、個人資料利用之對象、地區、期間和方式：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>(一) 對象：您所提供給本公司之個人資料，可能在蒐集目的之範圍內被分享給本公司之關係企業、其他與本公司有業務往來之機構、依法有調查權之機關或其他政府機構、或其他未受中央目的事業主管機關限制之國際傳輸個人資料接收者。 (二) 地區：前開對象所在地及國際傳輸所涉地點，包含但不限於中華民國。 (三) 期間：包括個人資料蒐集目的之存續期間、依相關法令或契約約定之保存期限、或本公司因執行業務所必須之保存期間。 (四) 方式：以自動化機器或其他非自動化之利用方式，包括但不限於以書面、電話、簡訊、傳真、電子郵件、網際網路、紙本或其他基於蒐集目的且合於當時科學技術之適當方式，對您提供的個人資料進行蒐集、處理及利用。</div>

          <div className='text-lg ont-bold mt-4'>四、依據個人資料保護法第3條，您得就個人資料行使以下權利：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司對您的個人資料，將採行妥適安全之措施加以保護，並避免被不當使用。您可隨時透過本公司官方網站揭露之通訊方式，就您提供的個人資料行使下列權利：(1)請求查詢或閱覽；(2)製給複製本；(3)請求補充或更正；(4)請求停止蒐集、處理及利用；及(5)請求刪除。</div>

          <div className='text-lg ont-bold mt-4'>五、本告知事項暨同意書之修訂：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司有權隨時修訂本隱私權政策之告知事項暨同意書，並於修訂後公佈在本公司官方網站，敬請隨時查閱。若您有任何問題，敬請透過本公司官方網站揭露之通訊方式進行聯繫，我們將儘快為您服務。</div>
         
        </div>
      </Modal>  }
      <div className='w-11/12 mx-auto flex gap-10 flex-col  lg:flex-row justify-start pt-10' >
        <div className='w-full  lg:w-1/2 ' data-aos="fade-up" data-aos-duration="1500">
            <div className='text-[#fff] mb-5 flex flex-col w-3/5 mx-auto lg:mx-0'>
              <img src={process.env.PUBLIC_URL+'/images/footer_title.png'} alt="" className='max-w-full'/>
            </div>
            <div className='h-[1px] bg-[#ffffff] w-4/5 mx-auto  my-3 lg:hidden'></div>
            <div className='w-4/5 mx-auto w-fit lg:w-full mt-16 lg:mt-20 lg:mx-0'>
              {/* <div className='flex items-center gap-5 mb-5 lg:mt-20'>
                <div className='bg-[#4E1951] rounded-full p-2 mr-1'><FaPhoneAlt color='white' size='10' /></div>
                <a href="tel:062958892" target="_blank"><b className='text-[#4E1951] lg:text-xl  font-bold'>預約專線｜06-2958892</b></a>
              </div> */}
              <div className='flex items-center gap-5 mb-5  mx-auto lg:mx-0'>
                <div className='bg-[#ffffff] rounded-full p-2 mr-1'><FaPhoneAlt  color='#223553' size='10' /></div>
                <a href="tel:063560852" target="_blank"><b className='text-[#ffffff] md:text-xl  font-normal'>預約專線｜06-356-0852</b></a>
              </div>
              <div className='flex items-center gap-5 mb-5  mx-auto lg:mx-0'>
                <div className='bg-[#ffffff] rounded-full p-2 mr-1'><FaMapMarkerAlt  color='#223553' size='10' /></div>
                <b className='text-[#ffffff] md:text-xl font-normal'>接待會館｜台南市安南區北安路三段。新宅五街口</b>
              </div>
            </div>

            <div className="mt-16 lg:mt-20">
              <iframe width="100%" height="300" className="mb-10" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.1184124641386!2d120.20706131496836!3d23.056119984936135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzIyLjAiTiAxMjDCsDEyJzMzLjMiRQ!5e0!3m2!1szh-TW!2stw!4v1678787681602!5m2!1szh-TW!2stw" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* 表單 */}
          <div className='w-full  lg:w-1/2'>
            <div className='text-[#ffffff] text-2xl font-bold  text-center mb-5  lg:text-left-left'>線上預約</div>
            <div className='h-[2px] bg-[#ffffff] w-full my-3'></div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto my-10  rel" data-aos="fade-up" data-aos-duration="1500" >
              <div className='flex gap-3'>
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full
                      px-3 py-3 " placeholder="姓名"   {...register("name", { required: true})}/>
                </div>
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full 
                      px-3 py-3 " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='w-full  '>
                  <select className="block  bg-white  w-full px-3 py-3 "  {...register("main_district", { required: true})} onChange={(e)=>{
                    handleChange(e)
                  }}>
                    <option defaultValue value="">居住縣市</option>
                    {
                      taiwan_districts.map((item,index)=>{
                        return(
                          <option value={item.name} key={item.name}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className='w-full  '>
                  <select className="block  bg-white  w-full px-3 py-3"  {...register("sub_district", { required: true})}>
                    <option defaultValue value="">居住地區</option>
                    {
                      subDistricts.map((item,index)=>{
                        return(
                          <option value={item.name} key={item.name+index}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>

                <div className='w-full my-5  '>
                  <input type="mail" className="block  bg-white   w-full
                      px-3 py-3 " placeholder="電子信箱"   {...register("mail", { required: true})}/>
                </div>
                <input type="hidden" name="msgMailTitle" value={msgMailTitle}  {...register("msgMailTitle", { required: true})}/>
                <div className='text-[#fff] leading-9 font-bold text-base w-[90%] mx-auto'>
                  本人已知悉以下個人資料蒐集聲明事項您所登錄的個人資料將作為以下用途：一、本網站所載之相關事項通知 二、客戶管理與服務 三、本公司行銷業務之推廣
                  <div className='flex ai-center jc-center  '>

                    <input type="checkbox"  className='px-5 mr-5' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                    <label htmlFor="checkit" className='f-white'>我同意通過電話或郵件方式與我聯絡</label>
                    <div className='text-[#fff] ml-2 underline  underline-offset-2 cursor-pointer' onClick={()=>setIsOpen(true)}> 個人資料聲明事項 </div>
                  </div>
                </div>
                <div className='flex w-3/4 mx-auto gap-10 my-16'>
                  <button className='bg-[#fff] px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='submit'>送出</button>
                  <button className='bg-[#fff] px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </div>
          </div>

    </div>
  )
}

export default Footer