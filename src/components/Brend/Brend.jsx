import React, { useState } from 'react';

import appleLogo from '../../assets/apple.png';
import xiaomiLogo from '../../assets/xiaomi.png';
import samsungLogo from '../../assets/samsung.png';
import honorLogo from '../../assets/honor.png';
import lgLogo from '../../assets/lg.webp';
import ankerLogo from '../../assets/anker.jpg';
import boshLogo from '../../assets/bosh.png';
import asusLogo from '../../assets/asus.png';
import lenovoLogo from '../../assets/lenevo.jpg';
import hpLogo from '../../assets/hp.webp';
import roborockLogo from '../../assets/roborock.webp';
import dysonLogo from '../../assets/dyson.webp';
import philipsLogo from '../../assets/philips.webp';
import delonghiLogo from '../../assets/delonghi.webp';
import tefalLogo from '../../assets/tefal.png';
import karcherLogo from '../../assets/karcher.webp';
import panasonicLogo from '../../assets/panasonic.webp';
import bekoLogo from '../../assets/beko.webp';
import braunLogo from '../../assets/braun.webp';
import playstationLogo from '../../assets/playstation.webp';
import jyskLogo from '../../assets/jysk.webp';
import casioLogo from '../../assets/casio.webp';
import motorolaLogo from '../../assets/motorola.png';
import infinixLogo from '../../assets/infinix.png';
import lorealLogo from '../../assets/loreal.webp';
import moroccanoilLogo from '../../assets/moroccanoil.png';
import kerastaseLogo from '../../assets/kerastase.png';
import sinozLogo from '../../assets/sinoz.webp';
import biodermaLogo from '../../assets/bioderma.png';
import larocheposayLogo from '../../assets/larocheposay.png';
import victoriassecretLogo from '../../assets/victoriassecret.png';
import medipeelLogo from '../../assets/medipeel.png';
import rhodeLogo from '../../assets/rhode.png';
import farmstayLogo from '../../assets/farmstay.png';

const brands = [
  { name: 'Apple', logo: appleLogo },
  { name: 'Xiaomi', logo: xiaomiLogo },
  { name: 'Samsung', logo: samsungLogo },
  { name: 'Honor', logo: honorLogo },
  { name: 'LG', logo: lgLogo },
  { name: 'Anker', logo: ankerLogo },
  { name: 'Bosch', logo: boshLogo },
  { name: 'Asus', logo: asusLogo },
  { name: 'Lenovo', logo: lenovoLogo },
  { name: 'HP', logo: hpLogo },
  { name: 'Roborock', logo: roborockLogo },
  { name: 'Dyson', logo: dysonLogo },
  { name: 'Philips', logo: philipsLogo },
  { name: 'DeLonghi', logo: delonghiLogo },
  { name: 'Tefal', logo: tefalLogo },
  { name: 'Karcher', logo: karcherLogo },
  { name: 'Panasonic', logo: panasonicLogo },
  { name: 'Beko', logo: bekoLogo },
  { name: 'Braun', logo: braunLogo },
  { name: 'PlayStation', logo: playstationLogo },
  { name: 'Jysk', logo: jyskLogo },
  { name: 'Casio', logo: casioLogo },
  { name: 'Motorola', logo: motorolaLogo },
  { name: 'Infinix', logo: infinixLogo },
  { name: "L'Oreal Paris", logo: lorealLogo },
  { name: 'Moroccanoil', logo: moroccanoilLogo },
  { name: 'Kerastase', logo: kerastaseLogo },
  { name: 'Sinoz', logo: sinozLogo },
  { name: 'Bioderma', logo: biodermaLogo },
  { name: 'La Roche-Posay', logo: larocheposayLogo },
  { name: "Victoria's Secret", logo: victoriassecretLogo },
  { name: 'Medipeel', logo: medipeelLogo },
  { name: 'Rhode', logo: rhodeLogo },
  { name: 'Farmstay', logo: farmstayLogo },
];

const Brend = () => {
  const [page, setPage] = useState(0);

  const perPage = 5;
  const pageCount = Math.ceil(brands.length / perPage);

 
  const shown = brands.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="w-full flex justify-center py-8 bg-[#FAFBFF]">
      <div className="w-[90%]">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Populyar brendlər</h2>

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
                <img src={b.logo} alt={b.name} className="h-[100%] w-[100%] object-contain" />
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

export default Brend;