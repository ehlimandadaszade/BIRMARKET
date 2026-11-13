import React, { useContext } from 'react';
import { GlobalContextApi } from '../../GlobalApi/GlobalContextApi';
import Cart from '../Cart/Cart';
import { FaSpinner } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Hero = () => {
  const { Api, loading } = useContext(GlobalContextApi);
  if (loading) {
    return <FaSpinner className="animate-spin text-blue-600 w-full text-center" size={30} />;
  }

  return (
    <div className='w-full flex justify-center'>
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {Api.map((element) => {
          const oldPrice = (element.price / (1 - element.discountPercentage / 100)).toFixed(2);

          return (
            <Link key={element.id} to={`/product/${element.id}`} target="_blank" rel="noopener noreferrer">
              <Cart
                id={element.id}
                key={element.id}
                image={element.thumbnail}
                
                title={element.title}
                price={element.price}
                oldPrice={oldPrice}
                discount={`-${Math.round(element.discountPercentage)}%`}
                badge={element.category}
                monthly={(element.price / 12).toFixed(2)}
                reviews={element.reviews?.length || 0}
                rating={Math.round(element.rating)}
                onAddToCart={() => console.log(`${element.title} səbətə əlavə olundu`)}
              />
            </Link>

          );
        })}
      </div>
    </div>

  );
}

export default Hero