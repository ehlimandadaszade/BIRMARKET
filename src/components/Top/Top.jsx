import React, { useContext, useState } from 'react'
import Cart from '../Cart/Cart'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi"
import { FaSpinner } from 'react-icons/fa';


const TOP = () => {

  const { Api, loading } = useContext(GlobalContextApi);

  const prod = Api.slice(0, 30)

  const [carousel, setCarousel] = useState(0)
  const px = 1375 * carousel

  if (loading) {
    return <FaSpinner className="animate-spin text-blue-600 w-full text-center" size={30} />;
  }

  return (
    <section className='flex justify-center '>
      <div className='h-[700px] w-[90%]'>
        <div className='flex items-center gap-x-[20px] pb-[30px]'>
          <p className='text-[35px] font-[600] text-[#21274F]'>TOP məhsullar</p>
        </div>
        <div className='flex gap-x-[10px] items-center relative'>
          <button
            style={carousel == 0 ? { display: "none" } : {}}
            onClick={() => setCarousel(x => x - 1)}
            className='w-[50px] h-[50px] rounded-[50%] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute left-0 translate-x-[-50%] z-1 cursor-pointer flex justify-center items-center text-[#EB2983] text-[25px]'><MdOutlineArrowBackIosNew /></button>
          <div className='w-[100%] overflow-hidden'>
            <div
              style={{ transform: `translateX(-${px}px)` }}
              className='flex gap-x-[10px] transition-all duration-300'>
              {prod?.sort(() => Math.random() - 0.5).map(element => {
                return <div key={element.id} className='shrink-0 cursor-pointer'>
                  <Cart
                    id={element.id}
                    image={element.images}
                    title={element.name}
                    price={element.price}
                    oldPrice={element.oldPrice}
                    discount={element.discountPercent ? `-${element.discountPercent}%` : ""}
                    badge={element.category}
                    monthly={(element.price / 12).toFixed(2)}
                    reviews={element.rating?.count || 0}
                    rating={element.rating?.average || 0}
                    onAddToCart={() => console.log(`${element.name} səbətə əlavə olundu`)}
                  />
                </div>
              }
              )}
            </div>
          </div>
          <button
            style={carousel == 5 ? { display: "none" } : {}}
            onClick={() => setCarousel(x => x + 1)}
            className='w-[50px] h-[50px] rounded-[50%] bg-white absolute right-0 translate-x-[50%] z-1 cursor-pointer flex justify-center items-center text-[#EB2983] text-[25px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><MdOutlineArrowForwardIos /></button>
        </div>

        <div className="flex justify-center items-center gap-[10px] mt-[18px]">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`w-[8px] h-[8px] rounded-full ${carousel === item ? "bg-[#EA207E]" : "bg-[#C8C9CC]"
                }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="w-[430px] h-[50px] border border-[#EA207E] text-[#EA207E] text-[17px] font-sans cursor-pointer">
            Bütün TOP məhsullara taxmaq
          </button>
        </div>


      </div>
    </section>
  )
}

export default TOP