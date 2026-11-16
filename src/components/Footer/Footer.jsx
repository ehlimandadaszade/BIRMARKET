import React from 'react'
import { MessageSquareMore, PhoneLog } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='w-[100%] h-screen  flex justify-center'>
      <main className='w-[90%]  h-[100vh] flex py-4.5'>



        {/* sol teref */}
        <div className="sec-1  w-[35%] h-[100%] ml-3 flex flex-col gap-11">
          <div className="online flex flex-col gap-4">
            <h1 className='text-[17px] hover:cursor-pointer text-gray-600 font-bold'>Dəstək mərkəzi</h1>
            <div className="box-1 w-[280px] h-[65px]  rounded-xl flex items-center gap-3 justify-center border-2  border-mauve-100">
              <MessageSquareMore
                className="w-7 h-7 hover:cursor-pointer fill-[#E91E63] text-white"
                strokeWidth={1}
              />
              <h1 className='text-[16px] hover:cursor-pointer font-bold hover:text-[#E91E63]'>Online dəstək</h1>
              <div className="oval text-amber-50 bg-emerald-600 w-[47px] h-[20px] rounded-xl font-bold text-[13px] flex hover:cursor-pointer justify-center items-center">24/7</div>

            </div>
            <div className="box-2 w-[280px] h-[75px] rounded-xl flex items-center gap-4  justify-center  border-2  border-mauve-100">
              <PhoneLog

                className="w-8 h-8 hover:cursor-pointer fill-[#E91E63] text-[#E91E63]"
                strokeWidth={1} />
              <div className="txt">
                <h1 className='text-[17px] font-bold hover:text-[#E91E63] hover:cursor-pointer text-black'>915</h1>
                <p className='text-gray-500 text-[14px] hover:cursor-pointer font-medium'>Hər gün: 9:00 - 00:00</p>
              </div>
            </div>
          </div>

          <div className="kanal flex flex-col gap-4  w-[400px] h-[400px]">
            <h1 className='text-[17px] text-gray-600 font-bold hover:cursor-pointer'>Bizi izləyin</h1>
            <div className='flex gap-2 items-center'>
              <IoLogoWhatsapp className='text-emerald-500 text-[22px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'> Whatsapp kanal </p>
            </div>
            <div className='flex gap-2 items-center' >
              <FaTelegram className='text-blue-500 text-[22px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >Telegram kanal </p>
            </div>
            <div className='flex gap-2 items-center' >
               <FaInstagram className='text-pink-700 text-[22px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >Instagram Birmarket </p>
            </div>
            <div className='flex gap-2 items-center' >
               <FaSquareFacebook className='text-blue-700 text-[22px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >Facebook Birmarket </p>
            </div>
            <div className='flex gap-2 items-center' >
               <AiFillTikTok className='text-black text-[23px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >Tiktok </p>
            </div>
            <div className='flex gap-2 items-center' >
               <FaYoutube className='text-red-500 text-[22px]' />
              <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >Youtube </p>
            </div>
          </div>
        </div>




        {/* sag teref */}
        <div className="sec-2 w-[65%]  h[100%] flex flex-col gap-9 ">
          <div className="text   flex items-center justify-around gap-25 ">
            <div className="col-1 flex flex-col gap-4">
              <h1 className='text-[17px] text-gray-600 font-bold hover:cursor-pointer'>Müştərilər üçün</h1>
              <ul className='flex flex-col gap-4'>
          <li className='text-[16px] text-gray-700 font-normal hover:text-[#E91E63]'>Birmarket-də necə sifariş etmək olar</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Çatdırılma və ödəmə</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>BirID</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Kredit</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Taksitli ödəniş</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Promokodlar və endirimlər</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Məhsulun geri qaytarılması</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Birmarket təhvil məntəqələrinin siyahısı</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Servis xidməti</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Ən çox verilən suallar</li>
                <li className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Məhsul rəyləri və onların paylaşılma qaydaları</li>
              </ul>
            </div>
            <div className="col-2 flex flex-col items-center justify-start h-[100%] gap-15  ">
              <div className="row-1 flex flex-col gap-4">
                <h1 className='text-[17px] text-gray-600 font-bold hover:cursor-pointer'>Tərəfdaşlar üçün Birmarket</h1>
                <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>Birmarket-də satışa necə başlamaq olar</p>
              </div>
              <div className="row-2 flex flex-col gap-4">
                <h1 className='text-[17px] text-gray-600 font-bold hover:cursor-pointer'  >  Şirkət</h1>
                <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]' >İstifadə şərtləri (ictimai oferta) Bir Bonus</p>
                <p className='text-[16px] text-gray-600 font-normal hover:text-[#E91E63]'>İstifadə şərtləri (ictimai oferta) Birmarket</p>
              </div>

            </div>
          </div>
          <div className="lang  h-[20%] w-[420px] flex flex-col gap-5 text-justify justify-end items-center text-[13px] text-mauve-400">
       <div className='text-justify flex flex-col justify-center items-center'>
          <p> Birmarket – hər zaman sərfəli qiymətlər!</p>

      <p>İstifadəçi razılaşması Birmarket və məxfilik siyasəti</p>

       </div>
      <div className='flex  gap-2.5 text-[13px]'>
        <p className='hover:cursor-pointer'>AZ</p>
        <p className='hover:cursor-pointer'>RU</p>
      </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Footer