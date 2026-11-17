
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
import { Link } from "react-router-dom"

const Actual = () => {
  return (
    <>
      <section className="actual flex flex-col justify-center items-center overflow-hidden gap-7">
        <div className="w-[90%]">

          <div className="act-head flex gap-3 self-start items-center my-[50px]">
            <h1 className="font-bold lg:text-[22px]">Bu gün aktual olanlar</h1>
            <img src={Logo} className="w-[100px] lg:w-[180px]" />
          </div>

          <div className="act-carts flex gap-5 items-center overflow-x-auto overflow-y-hidden w-full px-4 hide-scrollbar md:grid md:grid-cols-3 md:overflow-x-hidden md:justify-items-center lg:grid-cols-4 xl:grid-cols-6">

            <Link to="/category/telefonlar" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Iphone} className="w-[140px] h-[140px]" />
                <p className="text-[14px]">Telefonlar,Smart cihazlar və <br /> telefon aksesuarları</p>
              </div>
            </Link>

            <Link to="/category/notbuklar" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Kompt} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Notbuk və kompüterlər</p>
              </div>
            </Link>

            <Link to="/category/meiset" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Kondsi} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Məişət texnikası</p>
              </div>
            </Link>

            <Link to="/category/tv" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Tv} alt="" className="w-[140px] h-[120px]" />
                <p className="text-[15px] mt-[20px]">TV, audio və video</p>
              </div>
            </Link>

            <Link to="/category/gozelik" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Cosm} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Gözəllik</p>
              </div>
            </Link>

            <Link to="/category/bag" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Gardn} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Bağ üçün məhsullar</p>
              </div>
            </Link>

            <Link to="/category/saat" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Watch} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Saat, zinət və bəzək əşyaları</p>
              </div>
            </Link>

            <Link to="/category/idman" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Velo} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">İdman və Əyləncə</p>
              </div>
            </Link>

            <Link to="/category/avtomobil" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Teker} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Avtomobil məhsulları</p>
              </div>
            </Link>

            <Link to="/category/usaq" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Bear} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Uşaqlar üçün məhsullar</p>
              </div>
            </Link>

            <Link to="/category/temir" className="block" target="_blank">
              <div className="act-cart flex flex-col justify-center items-center gap-5 w-[190px] h-[220px] shrink-0 cursor-pointer">
                <img src={Drill} alt="" className="w-[140px] h-[140px]" />
                <p className="text-[15px]">Təmir və tikinti</p>
              </div>
            </Link>

          </div>

          <div className="w-full flex justify-center mt-[30px]">
            <button className="bg-none border border-[#ea207e] text-[#ea207e] w-[350px] max-w-[90%] h-[50px]">
              Məhsul kateqoriyalarına keç
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Actual
