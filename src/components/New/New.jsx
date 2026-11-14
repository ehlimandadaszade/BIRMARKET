import React, { useContext, useState } from 'react'
import Cart from '../Cart/Cart'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi"
import { FaSpinner } from 'react-icons/fa';



const New = () => {

  const { Api, loading } = useContext(GlobalContextApi);
  const [carousel, setCarousel] = useState(0)
  const px = 1375 * carousel

  if (loading) {
    return <FaSpinner className="animate-spin text-blue-600 w-full text-center" size={30} />;
  }

  return (
    <section className='flex justify-center pb-[50px]'>
      <div className='h-full w-[90%]'>
        <div className='flex items-center gap-x-[20px] pb-[30px]'>
          <p className='text-[35px] font-[600] text-[#21274F]'>Yeniliklər</p>
          <img src={"https://birmarket.az/images/birmarket_logo.svg"} />
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
              {Api?.map(element => {
                if (element.id < 16) {
                  return <div key={element.id} className='shrink-0'>
                    <Cart
                      id={element.id}
                      key={element.id}
                      image={element.thumbnail}
                      title={element.title}
                      price={element.price}
                      oldPrice={element.oldPrice}
                      discount={`-${Math.round(element.discountPercentage)}%`}
                      badge={element.category}
                      monthly={(element.price / 12).toFixed(2)}
                      reviews={element.reviews?.length || 0}
                      rating={Math.round(element.rating)}
                      onAddToCart={() => console.log(`${element.title} səbətə əlavə olundu`)}
                    />
                  </div>
                }
              })}
            </div>
          </div>
          <button
            style={carousel == 2 ? { display: "none" } : {}}
            onClick={() => setCarousel(x => x + 1)}
            className='w-[50px] h-[50px] rounded-[50%] bg-white absolute right-0 translate-x-[50%] z-1 cursor-pointer flex justify-center items-center text-[#EB2983] text-[25px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><MdOutlineArrowForwardIos /></button>
        </div>
      </div>
    </section>
  )
}

export default New