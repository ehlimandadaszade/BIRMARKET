import React from 'react'
import phoneImg from './phone.webp'
import googlePlayImg from './google-play.png'
import appStoreImg from './app-store.png'
import appGalleryImg from './app-gallery.png'

const tags = [
  { name: 'iPhone 16 Pro', url: 'https://birmarket.az/tags/iphone-16-pro' },
  { name: 'Xiaomi 18 pro max', url: 'https://birmarket.az/tags/xiaomi-18-pro-max' },
  { name: 'Kombi', url: 'https://birmarket.az/categories/138-elektrik-qazanlar' },
  { name: 'Iphone Duo', url: 'https://birmarket.az/tags/iphone-duo' },
  { name: 'Iphone 18 pro max', url: 'https://birmarket.az/tags/iphone-18-pro-max' },
  { name: 'Iphone 18 pro', url: 'https://birmarket.az/tags/iphone-18-pro' },
  { name: 'Xiaomi 17', url: 'https://birmarket.az/tags/xiaomi-17' },
  { name: 'Kondisionerlər', url: 'https://birmarket.az/categories/126-kondisionerler' },
  { name: 'Mega endirimlər', url: 'https://birmarket.az/mega-discounts' },
  { name: 'Honor telefonları', url: 'https://birmarket.az/tags/honor-mobil-telefonlar-ve-smartfonlar' },
  { name: 'Redmi note 17 pro max', url: 'https://birmarket.az/tags/xiaomi-redmi-note-17-pro-max' },
  { name: 'Advent calendar', url: 'https://birmarket.az/categories/5370-advent-teqvimleri' },
  { name: 'Poco X8 Pro', url: 'https://birmarket.az/tags/poco-x8-pro' },
  { name: 'Minoxidil', url: 'https://birmarket.az/tags/minoxidil' },
  { name: 'Honor 600 pro', url: 'https://birmarket.az/tags/honor-600-pro' },
  { name: 'Notbuklar', url: 'https://birmarket.az/categories/16-noutbuklar' },
  { name: 'Planşetlər', url: 'https://birmarket.az/categories/17-planshetler' },
  { name: 'Masaüstü kompüterlər', url: 'https://birmarket.az/categories/19-stolustu-komputerler' },
  { name: 'iPhone 17', url: 'https://birmarket.az/tags/iphone-17' },
  { name: 'Smartfonlar', url: 'https://birmarket.az/categories/3-mobil-telefonlar-ve-smartfonlar' },
]

const Mobile = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#f266a8] via-[#ee4896] to-[#ec2e86] overflow-hidden">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-0">
            <div className="lg:col-span-7 flex flex-col items-start gap-6 pb-8 lg:pb-14 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight">
                Yoxla, sevəcəksən!
              </h2>

              <ul className="space-y-3.5 sm:space-y-4 text-sm sm:text-base font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.5 8H17V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1.05c.44 1.72 2 3 3.95 3s3.51-1.28 3.95-3h3.1c.44 1.72 2 3 3.95 3s3.51-1.28 3.95-3H21c.55 0 1-.45 1-1v-5.5L19.5 8zM8 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11.5-8.5H17V8.5h2.5V10zm-3.5 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                  <span>2 saat ərzində ekspres çatdırılma</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="19" y1="5" x2="5" y2="19" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                  <span>
                    24 ayadək sərfəli <strong className="font-bold">kredit</strong> və <strong className="font-bold">taksit</strong> imkanları
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>900-dən çox təhvil məntəqəsinə pulsuz çatdırılma</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
                  </svg>
                  <span>Yüz minlərlə məhsul</span>
                </li>
              </ul>

              <button
                type="button"
                className="bg-white text-[#ec2e86] font-bold text-sm sm:text-base py-3 px-6 sm:px-8 rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg transition cursor-pointer"
              >
                Tətbiqi yüklə, sərfəli alış-verişi yoxla
              </button>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#" className="inline-block transition-transform hover:scale-105">
                  <img src={googlePlayImg} alt="Google Play" className="h-7 sm:h-8 w-auto object-contain" />
                </a>
                <a href="#" className="inline-block transition-transform hover:scale-105">
                  <img src={appStoreImg} alt="App Store" className="h-7 sm:h-8 w-auto object-contain" />
                </a>
                <a href="#" className="inline-block transition-transform hover:scale-105">
                  <img src={appGalleryImg} alt="AppGallery" className="h-7 sm:h-8 w-auto object-contain" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-center items-end self-end lg:-translate-x-6 xl:-translate-x-8">
              <img
                src={phoneImg}
                alt="Birmarket Mobile App"
                className="w-[290px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[470px] max-w-full object-contain block drop-shadow-2xl translate-y-3 sm:translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-8 sm:py-10">
        <div className="w-[90%] mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-[#1f2937] mb-4 sm:mb-5">
            Hazırda aktual olanlar
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {tags.map((tag, index) => (
              <a
                key={index}
                href={tag.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-700 bg-[#f3f4f6] hover:bg-gray-200 hover:text-black rounded-full transition-colors cursor-pointer"
              >
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Mobile
