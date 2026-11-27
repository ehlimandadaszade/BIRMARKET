import React from "react";

import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoCheck } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";


import aze from "../../assets/azerbaijan.png";
import ru from "../../assets/ru.svg";
import birmarket from "../../assets/../assets/Birmarket_loqo.svg.webp";
import bir from "../../assets/faiz.png";
import iki from "../../assets/iki.png";
import uc from "../../assets/uc.webp";
import dort from "../../assets/dort.svg";
import bes from "../../assets/bes.svg";
import alti from "../../assets/alti.svg";
import yeddi from "../../assets/yeddi.svg";
import sekkiz from "../../assets/sekkiz.svg";
import doqquz from "../../assets/doqquz.svg";
import on from "../../assets/on.svg";
import onbir from "../../assets/onbir.png";
import oniki from "../../assets/oniki.svg";
import onuc from "../../assets/onuc.svg";
import ondort from "../../assets/ondort.svg";
import onbes from "../../assets/onbes.svg";
import onalti from "../../assets/onalti.svg";
import onyeddi from "../../assets/onyeddi.svg";
import onsekkiz from "../../assets/onsekkiz.svg";
import ondoqquz from "../../assets/ondoqquz.svg";
import yirmi from "../../assets/yirmi.svg";
import yirmibir from "../../assets/yirmibir.svg";
import yirmiiki from "../../assets/yirmiiki.svg";
import { Link } from "react-router-dom";






const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState("Bakı");
  const Select = (selected) => {
    setSelectedCity(selected);
    setCity(false);
  };
  const [catalog, setCatalog] = React.useState(false);
  const [olke, setOlke] = React.useState(false);
  const [language, setLanguage] = React.useState("Az");

  const cities = [
    "Bakı",
    "Abşeron",
    "Ağcabədi",
    "Ağdam",
    "Ağdaş",
    "Ağdərə",
    "Ağstafa",
    "Ağsu",
    "Astara",
    "Balakən",
    "Bərdə",
    "Beyləqan",
    "Biləsuvar",
    "Cəbrayıl",
    "Cəlilabad",
    "Daşkəsən",
    "Füzuli",
    "Gədəbəy",
    "Gəncə",
    "Goranboy",
    "Göyçay",
    "Göygöl",
    "Hacıqabul",
    "İmişli",
    "İsmayıllı",
    "Kəlbəcər",
    "Kürdəmir",
    "Laçın",
    "Lənkəran",
    "Lerik",
    "Masallı",
    "Mingəçevir",
    "Naftalan",
    "Naxçıvan",
    "Neftçala",
    "Oğuz",
    "Qax",
    "Qazax",
    "Qəbələ",
    "Qobustan",
    "Quba",
    "Qubadli",
    "Qusar",
    "Saatlı",
    "Sabirabad",
    "Şabran",
    "Salyan",
    "Şamaxı",
    "Samux",
    "Şəki",
    "Şəmkir",
    "Şirvan",
    "Siyəzən",
    "Sumqayıt",
    "Şuşa",
    "Tərtər",
    "Tovuz",
    "Ucar",
    "Xaçmaz",
    "Xankəndi",
    "Xırdalan",
    "Xızı",
    "Xocalı",
    "Xocavənd",
    "Xudat",
    "Yardımlı",
    "Yevlax",
    "Zaqatala",
    "Zəngilan",
    "Zərdab"
  ];

  return (
    <>
      <section className="w-[100%] absolute sticky top-0 z-50 bg-[#F1F2F3] flex flex-col items-center shadow-md  w-full z-50   font-[Roboto]  ">
        <div className="w-[90%] ">
          <div className="  flex w-full h-[35px] bg-[#F1F2F3] justify-between  items-center cursor-pointer">
            <div>
              <ul className="text-[#6d6e73] flex items-center gap-[25px] text-[13px] cursor-pointer ">
                <li className=" z-1 hover:text-[#6d6e73d5] cursor-pointer">Çatdırılma və ödəmə</li>
                <li className=" z-1 hover:text-[#6d6e73d5] cursor-pointer">Qaytarılma</li>
                <li className=" z-1 hover:text-[#6d6e73d5] cursor-pointer">Zəmanət</li>
                <button className="w-[120px] h-[20px] bg-[#BF2194] rounded-[4px] z-1  text-white text-[12px]  hover:brightness-105 transition cursor-pointer">Birmarket-də satın</button>
              </ul>
            </div>
            <div>
              <ul className="flex text-[#696767] items-center gap-[20px] text-[14px]">
                <div className="relative gap-5">
                  <button className="flex items-center gap-2"
                    onClick={() => setOpen(!open)}            >
                    <BsTelephone className="text-[14px]  cursor-pointer hover:brightness-105" />915
                    <SlArrowDown className={`w-[9px] h-[9px] transition-transform font-bold  ${open ? "rotate-180" : ""}`} />
                  </button>

                  {open && (
                    <div className="absolute top-8 right-0 bg-white shadow-xl rounded-lg p-5 w-[250px] z-[200] text-[#50557a] flex flex-col gap-[9px] cursor-pointer ">
                      <p className="text-gray-500">  Qaynar xətt </p>
                      <h2 className="text-3xl font-bold"> 915  </h2>
                      <p>Digər ölkələrdən gələn zənglər üçün</p>
                      <p> +994 12 210 00 21 </p>
                      <p> Çağrı mərkəzinin iş saatları   </p>
                      <p className="text-black">  Hər gün | 09:00 - 00:00     </p>
                    </div>
                  )}
                </div>
                <div className="relative">

                  <button
                    onClick={() => setOlke(!olke)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={aze}
                      alt="azerbaycan"
                    />

                    <span>{language}</span>

                    <SlArrowDown className={`w-[9px] h-[9px]  transition-transform  ${olke ? "rotate-180" : ""}`} />
                  </button>

                  {olke && (
                    <div className="absolute top-8 left-0 bg-white shadow-lg rounded-[8px] w-[100px] z-100 hover:bg-gray-100">
                      <button
                        onClick={() => { setLanguage("Az"); setOlke(false); }}
                        className="w-full flex items-center gap-2 px-3 py-2 ">
                        <img src={aze} className="w-[20px] h-[20px]" /> Az
                      </button>

                      <button
                        onClick={() => {
                          setLanguage("Ru"); setOlke("Ru");
                        }} className="w-full z-1 flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
                        <img src={ru} alt="rus" className="w-[20px] h-[20px]" />Ru
                      </button>

                    </div>
                  )}

                </div>
                <div className="flex items-center gap-2  cursor-pointer  z-1 hover:text-[#6d6e73d5]">
                  <FaRegUser className="text-[14px] " />
                  <span className="text-[14px] "> Qeydiyyat | Giriş </span>
                </div>
              </ul>
            </div>
          </div>
        </div>



        <hr className="w-full h-[1px] border-0 bg-[#BDBDBD]" />

        <div className="w-[90%] h-[60px] flex items-center gap-[20px] justify-between">
          <div className=" w-[130px] h-[30px]" >
            <Link to="/">
              <img className="min-w-[130px] h-[30px]  cursor-pointer" src={birmarket} alt="birmarket" />
            </Link>

          </div>

          <div className=" flex">
            <button onClick={() => setCity(!city)} className="flex items-center gap-2 cursor-pointer"           >
              <CiLocationOn className="text-[24px] font-bold" />
              <div className="flex justify-center items-center  gap-[4px]">
                <p className="text-[14px] text-black "> Şəhər:</p>
                <p className="text-[14px] font-bold "> {selectedCity}</p></div>


            </button>

            {city && (

              <>
                <div
                  onClick={() => setCity(false)}></div>
                <div className="fixed top-[100px] left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-2xl shadow-2xl z-[1] p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className=" flex justify-center items-center text-[24px]  text-[#222] translate-x-75 font-bold">Şəhərinizi  seçin</h2>
                    <div className="flex items-center justify-center">
                      <button onClick={() => setCity(false)} className="text-[30px] text-gray-400 hover:text-black"> × </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-x-8 gap-y-2 max-h-[600px] overflow-y-auto">

                    {cities.map((item) => (
                      <button key={item} onClick={() => Select(item)}
                        className="w-full px-1 py-1 rounded-lg text-[15px] flex items-center justify-between hover:text-red-500">
                        <span>{item}</span>

                        {selectedCity === item && (
                          <span className="text-[#FF3B96] text-[24px] font-bold "> <GoCheck /></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          <div className="relative overflow-visible">
            <button
              onClick={() => setCatalog(!catalog)}
              className="bg-[#e91c7c] w-[160px] h-[40px] rounded-[4px] text-white text-[12px] px-3 cursor-pointer hover:brightness-110 transition flex items-center justify-between" >
              <span>Məhsul kataloqu</span>

              <SlArrowDown
                className={`w-[9px] h-[9px] transition-transform ${catalog ? "rotate-180" : ""}`} />
            </button>

            {catalog && (
              <div className="absolute top-[48px] left-0 w-[270px] max-h-[500px] overflow-y-auto bg-white rounded-[8px] shadow-2xl border border-gray-100 z-[10]">
                {[
                  <div className="flex h-[30px] gap-[8px] justify-center  ">
                    <img src={bir} alt="" />
                    80%-dək böyük endirimlər vaxtıdır
                  </div>,
                  <div className="flex h-[30px] gap-[8px] justify-center  ">
                    <img src={iki} alt="" />
                    İlk kredit alış-verişinə xüsusi fürsət ---0-0-12!
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={uc} alt="" />
                    Mega endirimlər
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={dort} alt="" />
                    Telefonlar, Smart cihazlar və telefon aksesuarları
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={bes} alt="" />
                    Məişət texnikası
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={alti} alt="" />
                    Notbook və kompüterlər
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={yeddi} alt="" />
                    TV,Audio və video
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={sekkiz} alt="" />
                    Ev əşyaları
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={doqquz} alt="" />
                    Avtomobil məhsulları
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={on} alt="" />
                    Gözəllik
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onbir} alt="" />
                    Sağlamlıq
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={oniki} alt="" />
                    Uşaqlar üçün
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onuc} alt="" />
                    Qida məhsulları və içkilər
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={yirmiiki} alt="" />
                    Məişət kimyası
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={ondort} alt="" />
                    İdman və Əyləncə
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onbes} alt="" />
                    Təmir-tikinti
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onyeddi} alt="" />
                    Bir Gaming
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onalti} alt="" />
                    Saat, zinət və bəzək əşyaları
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <div className="w-[30px]"></div>
                    Foto və videokameralar
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={onsekkiz} alt="" />
                    Bağ üçün məhsullar
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={ondoqquz} alt="" />
                    kitablar hobbi Məktəb və ofis ləvazımatları
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={yirmi} alt="" />
                    Zoo məhsullar
                  </div>,
                  <div className="flex h-[30px] gap-[8px]  ">
                    <img src={yirmibir} alt="" />
                    Geyim, ayaqqabı və aksesuarlar
                  </div>,

                ]
                  .map((item) => (
                    <div key={item} onClick={() => setCatalog(false)}
                      className="px-5 py-3 text-[14px] text-[#333]  hover:text-[#e91c7c] cursor-pointer transition">{item}</div>
                  ))}

              </div>
            )}
          </div>

          <div className="flex w-[600px]">
            <input className="bg-white w-[100%] min-w-[200px] h-[40px] px-3 outline-none  " type="text" placeholder="Məhsul axtar" />
            <button className="bg-[#e91c7c] w-[60px] h-[40px]  text-white text-[12px] cursor-pointer">Axtar</button>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-3 hover:text-[#6d6e73d5] cursor-pointer">
              <FaRegHeart className="text-[18px] z-1 " />
              <span className="text-[14px] z-1 font-bold ">Seçilmişlər </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#6d6e73d5]">
              <FiShoppingCart className="text-[18px] z-1 " />
              <span className="text-[14px] z-1 font-bold "> Səbət</span>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Header