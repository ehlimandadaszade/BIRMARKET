import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Carousel } from 'antd'
import React from 'react'
import {
  LuPercent as Percent,
  LuCreditCard as CreditCard,
  LuFlame as Fire,
  LuSmartphone as Smartphone,
  LuWashingMachine as WashingMachine,
  LuLaptop as Laptop,
  LuTv as Tv,
  LuSofa as Sofa,
  LuCar as Car,
  LuSparkles as Beauty,
  LuHeartPulse as Health,
  LuBlocks as Toys,
  LuApple as Food,
  LuSprayCan as Cleaning,
  LuDumbbell as Sport,
  LuWrench as Repair,
  LuGamepad2 as Gaming,
  LuWatch as Watch,
  LuCamera as Camera,
  LuSprout as Garden,
  LuBookOpen as Books,
  LuPawPrint as Pets,
  LuShirt as Clothes,
  LuShoppingBag as Bag,
  LuTruck as Truck,
  LuWallet as Wallet,
  LuChevronRight as ChevronRight,
  LuChevronDown as ChevronDown,
} from 'react-icons/lu'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import smImage1 from '../../assets/sm-image1.jpg'
import smImage2 from '../../assets/sm-image2.jpg'
import smImage3 from '../../assets/sm-image3.jpg'

const Hero = () => {
  return (
    <section className="w-full bg-white py-3 font-['Roboto']">
      <div className=" w-[90%] mx-auto grid grid-cols-[240px_1fr_280px] gap-4 items-start">

        <div className="bg-white">
          <div className="h-[515px] overflow-y-auto [scrollbar-width:none] hover:[scrollbar-width:thin]">

            <ul className="text-xl text-purple-500 [&_svg]:shrink-0">
              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Percent />
                <span className="text-sm text-black">80%-dək böyük endirimlər vaxtıdır!</span>
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <CreditCard />
                <span className="text-sm text-black">İlk kredit alış-verişinə xüsusi <br /> fürsət — 0-0-12!</span>
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Fire className="text-orange-500" />
                <span className="text-sm text-black">Mega endirimlər</span>
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Smartphone />
                <span className="text-sm text-black">Telefonlar, Smart cihazlar və telefon aksessuarları</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <WashingMachine />
                <span className="text-sm text-black">Məişət texnikası</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Laptop />
                <span className="text-sm text-black">Notbuk və kompüterlər</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Tv />
                <span className="text-sm text-black">TV, audio və video</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Sofa />
                <span className="text-sm text-black">Ev əşyaları</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Car />
                <span className="text-sm text-black">Avtomobil məhsulları</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Beauty />
                <span className="text-sm text-black">Gözəllik</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Health />
                <span className="text-sm text-black">Sağlamlıq</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Toys />
                <span className="text-sm text-black">Uşaqlar üçün</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Food />
                <span className="text-sm text-black">Qida məhsulları və içkilər</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Cleaning />
                <span className="text-sm text-black">Məişət kimyası</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Sport />
                <span className="text-sm text-black">İdman və Əyləncə</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Repair />
                <span className="text-sm text-black">Təmir-tikinti</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Gaming />
                <span className="text-sm text-black">Bir Gaming</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Watch />
                <span className="text-sm text-black">Saat, zinət və bəzək əşyaları</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Camera />
                <span className="text-sm text-black">Foto və videokameralar</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Garden />
                <span className="text-sm text-black">Bağ üçün məhsullar</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Books />
                <span className="text-sm text-black">Kitablar, Hobbi, Məktəb və ofis ləvazimatları</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Pets />
                <span className="text-sm text-black">Zoo məhsullar</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>

              <li className="flex items-center gap-3 p-2 hover:bg-purple-50">
                <Clothes />
                <span className="text-sm text-black">Geyim, ayaqqabı və aksessuarlar</span>
                <ChevronRight className="ml-auto text-gray-400" />
              </li>
            </ul>

          </div>

          <button className="flex items-center gap-2 p-2 font-bold text-pink-600">
            <ChevronDown />
            Bütün kateqoriyalar
          </button>
        </div>

        <div className="min-w-0">

          <div className="overflow-hidden">
            <Carousel
              autoplay
              autoplaySpeed={3000}
              dots
              className="
                [&_.slick-dots]:!left-1/2
                [&_.slick-dots]:!right-auto
                [&_.slick-dots]:!-translate-x-1/2
                [&_.slick-dots]:!mx-0
                [&_.slick-dots]:!w-auto
                [&_.slick-dots]:!px-2
                [&_.slick-dots]:!py-1.5
                [&_.slick-dots]:!bg-black/30
                [&_.slick-dots]:!rounded-full
                [&_.slick-dots_li]:!w-2
                [&_.slick-dots_li]:!h-2
                [&_.slick-dots_li.slick-active]:!w-2
                [&_.slick-dots_li_button]:!w-2
                [&_.slick-dots_li_button]:!h-2
                [&_.slick-dots_li_button]:!rounded-full
                [&_.slick-dots_li_button]:!bg-white
                [&_.slick-dots_li_button]:!opacity-100
                [&_.slick-dots_li.slick-active_button]:!bg-pink-500
              "
            >
              <div><img src={image1} alt="" className="w-full h-[446px] object-cover" /></div>
              <div><img src={image2} alt="" className="w-full h-[446px] object-cover" /></div>
              <div><img src={image3} alt="" className="w-full h-[446px] object-cover" /></div>
              <div><img src={image4} alt="" className="w-full h-[446px] object-cover" /></div>
              <div><img src={image5} alt="" className="w-full h-[446px] object-cover" /></div>
              <div><img src={image6} alt="" className="w-full h-[446px] object-cover" /></div>
            </Carousel>
          </div>

          
          <div className="mt-4 flex items-center justify-between gap-4 bg-white py-4 px-2 hide-scrollbar">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-[#4FD1C5] text-white">
                <Bag className="w-6 h-6" />
              </div>
              <span className="text-[14px]  text-[#2A3342] whitespace-nowrap">
                500 000-dən çox məhsul
              </span>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-[#EA0065] text-white">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[14px]  text-[#2A3342] whitespace-nowrap">
                10 ₼-dən başlayan <br /> sifarişlərə pulsuz çatdırılma
              </span>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-[#8E24AA] text-white">
                <Percent className="w-6 h-6" />
              </div>
              <span className="text-[14px]  text-[#2A3342] whitespace-nowrap">
                Endirimlər və aksiyalar
              </span>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-[#FFD600] text-black">
                <Wallet className="w-6 h-6" />
              </div>
              <span className="text-[14px]  text-[#2A3342] whitespace-nowrap">
                Birbank ilə 24 ayadək taksit
              </span>
            </div>

          </div>

        </div>

        <div className="h-[446px] flex flex-col gap-2">
          <img src={smImage1} alt="" className="flex-1 min-h-0 w-full object-cover" />
          <img src={smImage2} alt="" className="flex-1 min-h-0 w-full object-cover" />
          <img src={smImage3} alt="" className="flex-1 min-h-0 w-full object-cover" />
        </div>

      </div>
    </section>
  )
}

export default Hero