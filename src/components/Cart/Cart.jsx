import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({
  id,
  image,
  title,
  price,
  oldPrice,
  discount,
  badge,
  monthly,
  reviews = 0,
  rating = 5,
  onAddToCart,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const filledStars = Math.round(Math.min(Math.max(rating, 0), 5));

  return (

    <div className="card relative w-[265px] overflow-hidden bg-white border border-gray-200 rounded px-[20px] py-[16px] flex flex-col">

      {/* Ürək ikonu (klaviatura ilə də işləsin deyə button) */}
      <button
        type="button"
        onClick={() => setIsFavorite((prev) => !prev)}
        aria-label={isFavorite ? 'Sevimlilərdən çıxar' : 'Sevimlilərə əlavə et'}
        aria-pressed={isFavorite}
        className="card-urek absolute top-[12px] right-[12px] z-20 p-0 bg-transparent border-0 cursor-pointer"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill={isFavorite ? '#f0317f' : 'none'}
          stroke={isFavorite ? '#f0317f' : '#9ca3af'}
          strokeWidth="1.5"
          className="transition-colors duration-200"
        >
          <path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.1-8 11-8 11z" />
        </svg>
      </button>

      {/* Şəkil və nişanlar */}
      <div className="card-sekil-qutu relative w-full h-[195px] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="card-sekil w-[165px] max-h-full object-contain"
        />

        <div className="card-isareler absolute left-0 bottom-0 z-10 flex flex-col items-start gap-y-[3px]">
          {discount && (
            <span className="card-endirim h-[18px] px-[4px] flex items-center bg-[#f0317f] text-white text-[11px] font-medium rounded-[2px]">
              {discount}
            </span>
          )}
          {badge && (
            <span className="card-badge h-[18px] px-[4px] flex items-center bg-[#d63de0] text-white text-[11px] font-medium rounded-[2px]">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Qiymət */}
      <div className="card-qiymet-sira mt-[12px] flex flex-wrap items-center gap-x-[8px]">
        <span className="card-qiymet text-[18px] font-bold text-[#f0317f]">{price} ₼</span>
        {oldPrice && (
          <span className="card-kohne-qiymet text-[13px] font-semibold text-gray-400 line-through">
            {oldPrice} ₼
          </span>
        )}
      </div>

      {/* Taksit — yer həmişə qorunur ki, bütün kartlar eyni hündürlükdə olsun */}
      <div className="mt-[6px] min-h-[22px]">
        {monthly && (
          <div className="card-taksit w-fit px-[8px] h-[22px] flex items-center justify-center bg-[#fde047] rounded-[3px] text-[13px] font-medium text-gray-900">
            {monthly} ₼ x 12 ay
          </div>
        )}
      </div>

      {/* Başlıq — həmişə 2 sətirlik yer */}
      <h3 className="card-basliq mt-[6px] min-h-[38px] text-[13px] leading-[19px] text-gray-800 line-clamp-2 overflow-hidden">
        {title}
      </h3>

      {/* Reytinq */}
      <div className="card-reytinq mt-[6px] flex items-center gap-x-[5px]">
        <span
          className="card-ulduzlar text-[14px] tracking-[1px]"
          aria-label={`${filledStars} ulduz`}
        >
          <span className="text-[#ff9900]">{'★'.repeat(filledStars)}</span>
          <span className="text-gray-300">{'★'.repeat(5 - filledStars)}</span>
        </span>
        <span className="card-reytinq-say text-[12px] text-gray-500">{reviews} reytinq</span>
      </div>

      {/* Düymə — mt-auto əvəzinə sabit məsafə */}
      <button
        type="button"
        onClick={onAddToCart}
        className="card-duyme mt-[12px] w-full h-[41px] flex items-center justify-center gap-x-[9px] bg-[#fdeef4] text-[#f0317f] text-[16px] font-semibold rounded-[3px] transition-colors duration-200 hover:bg-[#f0317f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0317f]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="card-sebet-ikon"
        >
          <path d="M2 3h3l2.5 11h10L20 6H6" />
          <path d="M9 19h.01M17 19h.01" strokeWidth="3" strokeLinecap="round" />
        </svg>
        Sabah
      </button>
    </div>


  );
}

export default Cart;