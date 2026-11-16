import Bear from "../../assets/actual-img/bear.png"
import Cosm from "../../assets/actual-img/cosm.png"
import Drill from "../../assets/actual-img/drill.png"
import Gardn from "../../assets/actual-img/gardn.png"
import Iphone from "../../assets/actual-img/iphone.png"
import Kompt from "../../assets/actual-img/kompt.png"
import Kondsi from "../../assets/actual-img/kondsi.png"
import Teker from "../../assets/actual-img/tekr.png"
import Tv from "../../assets/actual-img/tv.png"
import Velo from "../../assets/actual-img/velo.png"
import Watch from "../../assets/actual-img/watch.png"
import Logo from "../../assets/actual-img/birlogo.png"


const Actual = () => {
  return (
    <>
    
    <section className="actual  flex flex-col justify-center items-center overflow-hidden gap-7 mr-[2rem] ml-[5rem]">

      <div className="act-head flex gap-3 self-start items-center">
        <h1 className="font-bold lg:text-[22px] ">Bu gün aktual olanlar</h1>
        <img src={Logo} className="w-[100px] lg:w-[180px]" />
      </div>

      <div className="act-carts flex  gap-5 items-center overflow-x-auto overflow-y-hidden w-full px-4 hide-scrollbar md:flex md:flex-wrap " >

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0" >
          <img src={Iphone} className="w-[120px]"/>
          <p className="text-[14px]">Telefonlar,Smart cihazlar və <br /> telefon aksesuarları</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Kompt} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Notbuk və kompüterlər</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Kondsi} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Məişət texnikası</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Tv} alt="" className="w-[120px]"/>
          <p className="text-[15px]">TV, audio və video</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Cosm} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Gözəllik</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Gardn} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Bağ üçün məhsullar</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Watch} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Saat, zinət və bəzək əşyaları</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Velo} alt="" className="w-[120px]"/>
          <p className="text-[15px]">İdman və Əyləncə</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Teker} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Avtomobil məhsulları</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Bear} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Uşaqlar üçün məhsullar</p>
        </div>

        <div className="act-cart flex flex-col justify-center items-center gap-5  w-[190px] h-[220px] shrink-0">
          <img src={Drill} alt="" className="w-[120px]"/>
          <p className="text-[15px]">Təmir və tikinti</p>
        </div>


      </div>

    <button className="text-[#df0a9f] bg-[transparant] cursor-pointer border w-[250px] h-[40px]">Məhsul kateqoriyalarına keç</button>

    </section>




    </>
  )
}

export default Actual