import React, { useContext } from 'react'
import { GlobalContextApi } from '../../GlobalApi/GlobalContextApi'
import ikon from '../../assets/Birmarket.png'
import Cart from '../Cart/Cart'
import { FaSpinner } from "react-icons/fa"
import { Link } from 'react-router-dom'
const MostSales = () => {
  const { Api, loading } = useContext(GlobalContextApi)

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <FaSpinner className="animate-spin text-blue-600" size={30} />
      </div>
    );
  }


  return (
    <div className='w-[100%] bg-[#FAFBFF] h-auto flex justify-center items-center'>
      <div className="w-[90%] h-auto flex flex-col gap-[30px]">
        <div className="bir w-full max-w-[500px] h-auto flex gap-[15px] items-center pb-[10px]">
          <h1 className='text-[34px] font-bold tracking-wide text-[#1E244D]'>Ən çox satılanlar</h1>
          <img data-info="bestseller-logo" src="https://birmarket.az/images/birmarket_logo.svg" alt="Birmarket Logo" className='pt-[5px]'></img>
        </div>
        <div className="iki h-auto flex gap-[10px] flex-wrap">
          {Api && Api.slice(0, 15).sort(() => Math.random() - 0.5).map((element) => {
            const oldPrice = (element.price / (1 - element.discountPercentage / 100)).toFixed(2)
            return (

              <Cart
                id={element.id}
                image={element.images}
                title={element.name}
                price={element.price}
                oldPrice={element.oldPrice}
                discount={element.discountPercent ? `-${element.discountPercent}%` : ""}
                badge={element.category}
                monthly={(element.price / 12).toFixed(2)}
                reviews={element.rating?.count || 3}
                rating={element.rating?.average || 4}
                onAddToCart={() => console.log(`${element.name} səbətə əlavə olundu`)}
              />

            )
          })}
        </div>
        <div className="uc flex justify-center items-center pb-[50px] ">
          <button className='border border-solid border-[#EA207E] text-[#EA207E] h-[50px] w-[420px] font-normal cursor-pointer'>Məhsul kateqoriyalarına keç</button>
        </div>

      </div>
    </div>
  )
}

export default MostSales