
import React, { useState } from 'react';

const brands = [
  { name: 'Rossmann', logo: 'https://strgimgr.b-cdn.net/dcmimages/1715/rossmann2_36403.webp?quality=75&width=200' },
  { name: 'MyShops', logo: 'https://strgimgr.b-cdn.net/dcmimages/681/myshops_37913.png?quality=75&width=200' },
  { name: 'Mağaza', logo: 'https://strgimgr.b-cdn.net/dcmimages/2439/f_66794.jpg?quality=75&width=200' },
  { name: 'iSpace', logo: 'https://strgimgr.b-cdn.net/dcmimages/3849/ispace_37944.png?quality=75&width=200' },
  { name: 'Adore', logo: 'https://strgimgr.b-cdn.net/dcmimages/4756/adore_40962.png?quality=75&width=200' },
  { name: 'FIL Electronics', logo: 'https://strgimgr.b-cdn.net/dcmimages/2960/fil-electronics_37941.png?quality=75&width=200' },
  { name: 'JYSK', logo: 'https://strgimgr.b-cdn.net/dcmimages/2261/jysk_37922.png?quality=75&width=200' },
  { name: 'Bahar Store', logo: 'https://strgimgr.b-cdn.net/dcmimages/2091/bahar-store_37938.png?quality=75&width=200' },
  { name: 'Korendy', logo: 'https://strgimgr.b-cdn.net/dcmimages/3853/korendy_37937.png?quality=75&width=200' },
  { name: "L'Amour", logo: 'https://strgimgr.b-cdn.net/dcmimages/3854/lamour_37936.png?quality=75&width=200' },
  { name: 'BIR Telecom', logo: 'https://strgimgr.b-cdn.net/dcmimages/3858/birtelecom_37932.png?quality=75&width=200' },
  { name: 'Noutbuklar.az', logo: 'https://strgimgr.b-cdn.net/dcmimages/3862/noutbuklaraz_37926.png?quality=75&width=200' },
  { name: 'Nano', logo: 'https://strgimgr.b-cdn.net/dcmimages/3861/nano_37927.png?quality=75&width=200' },
  { name: 'The Entertainer', logo: 'https://strgimgr.b-cdn.net/dcmimages/2956/theentertainer_37925.png?quality=75&width=200' },
  { name: 'Chicco', logo: 'https://strgimgr.b-cdn.net/dcmimages/1725/chicco_37923.png?quality=75&width=200' },
];

const SalesMan = () => {
  const [page, setPage] = useState(0);

  const perPage = 5;
  const pageCount = Math.ceil(brands.length / perPage);

  const shown = brands.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="w-full flex justify-center py-8 bg-[#FAFBFF]">
      <div className="w-[90%]">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Populyar satıcılar</h2>

        <div className="relative flex items-center">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute -left-5 z-10 w-10 h-10 bg-white shadow-md text-[20px] rounded-full text-[#ea1b75] border border-gray-100 font-bold cursor-pointer"
            >
              &lt;
            </button>
          )}

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {shown.map((b) => (
              <div
                key={b.name}
                className="bg-white h-24 rounded-md shadow-sm border border-gray-100 flex items-center justify-center p-5 hover:shadow-md cursor-pointer"
              >
                <img src={b.logo} alt={b.name} className="h-[80%] w-[80%] object-contain" />
              </div>
            ))}
          </div>

          {page < pageCount - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute -right-5 z-10 w-10 h-10 bg-white text-[20px] shadow-md rounded-full text-[#ea1b75] border border-gray-100 font-bold cursor-pointer"
            >
              &gt;
            </button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${page === i ? 'bg-[#ea1b75]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesMan;
