
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi";

function Detail() {
  const { id } = useParams();
  const { Api, loading, error } = useContext(GlobalContextApi);

  const [selectedImage, setSelectedImage] = useState("");
  const [reviewCount] = useState(
    () => Math.floor(Math.random() * 101)
  );
  const [selectedMonth, setSelectedMonth] = useState(12);

  const months = [6, 12, 18, 24];

  const product = Api.find((item) => String(item.id) === String(id));

  if (loading) {
    return <p className="text-center mt-10">Yüklənir...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Xəta: {error}</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Məhsul tapılmadı!</p>;
  }

  // Məhsulun qiymət məlumatları
  const price = Number(product.price);
  const hasPrice =
    product.price !== null &&
    product.price !== undefined &&
    Number.isFinite(price);

  const oldPrice =
    product.oldPrice !== null &&
      product.oldPrice !== undefined
      ? Number(product.oldPrice)
      : null;

  const discount = Number(product.discountPercent) || 0;

  const monthlyPayment = hasPrice
    ? (price / selectedMonth).toFixed(2)
    : null;

  // Məhsul şəkilləri
  const productImages = Array.isArray(product.images)
    ? product.images.filter(Boolean)
    : product.images
      ? [product.images]
      : [];

  const images = productImages.length > 0
    ? Array.from({ length: 7 }, (_, index) =>
      productImages[index] || productImages[0]
    )
    : [];

  const mainImage = selectedImage || images[0];

  return (
    <>
      {/* Navbarın altındakı kateqoriyalar sətri */}
      <div className="fixed top-[93px] left-0 w-full h-[61px] bg-white border-b border-gray-200 z-40">
        <div className="max-w-[1518px] mx-auto px-6 h-full flex items-center gap-3 text-[16px]">

          <span className="text-[#9497AD]">Birmarket</span>
          <span className="text-[#9497AD]">›</span>

          <span className="text-[#9497AD]">Kateqoriyalar</span>
          <span className="text-[#9497AD]">›</span>

          <span className="text-[#9497AD]">Bağ üçün məhsullar</span>
          <span className="text-[#9497AD]">›</span>

          <span className="text-[#9497AD]">Bağ üçün texnika</span>
          <span className="text-[#9497AD]">›</span>

          <span className="font-semibold text-[#1e2438]">
            Zəncirli mişarlar və elektrik mişarlar
          </span>

        </div>
      </div>

      {/* Məhsulun əsas hissəsi */}
      <div className="container mx-auto px-6 pt-[179px] pb-[260px]">
        <div className="flex flex-wrap 2xl:flex-nowrap gap-6 items-start">

          {/* Kiçik şəkillər */}
          <div className="w-[80px] flex-shrink-0 flex flex-col gap-2 mt-[10px]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                onClick={() => setSelectedImage(img)}
                className="w-[80px] h-[60px] object-contain border border-gray-200 rounded cursor-pointer p-1"
              />
            ))}
          </div>

          {/* Böyük şəkil və taksit dairələri */}
          <div className="relative w-[450px] h-[450px] flex-shrink-0 flex items-center justify-center bg-white mt-[30px]">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-contain"
            />

            {/* Taksit dairələri */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 -translate-y-[270px] -translate-x-[-20px] flex flex-col gap-5">

              {/* Birinci dairə - Birbank */}
              <div
                className="w-[145px] h-[145px] rounded-full border border-gray-200 flex flex-col items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom, #7C62E3 0%, #6D8AD6 50%, #5CB8C7 100%)"
                }}
              >
                <div className="relative w-[85px] h-[55px] mb-1">

                  {/* Boz-ağ kart */}
                  <div className="absolute top-[12px] left-[30px] w-[54px] h-[32px] rounded-[6px] bg-[#969696] border border-[#969696] shadow-md -rotate-[35deg] flex items-center justify-center">
                    <div className="w-[13px] h-[27px] bg-[#B6B6B6] rotate-88"></div>
                  </div>

                  {/* Qara-bənövşəyi kart */}
                  <div className="absolute top-[12px] left-[1px] w-[54px] h-[32px] rounded-[6px] bg-gradient-to-br from-black to-purple-800 border border-purple-500 shadow-md -rotate-[35deg] flex items-center justify-center">
                    <div className="w-[13px] h-[27px] bg-[#9C21A6] rotate-88"></div>
                  </div>

                </div>

                <span className="text-[19px] font-bold text-white">
                  3 aylıq
                </span>

                <span className="text-[13px] font-medium text-white">
                  taksit
                </span>
              </div>

              {/* İkinci dairə - 0-0-12 */}
              <div className="w-[145px] h-[145px] rounded-full bg-[#E040FB] flex flex-col items-center justify-center text-white">

                <span className="text-[25px] font-bold leading-tight">
                  0-0-12
                </span>

                <span className="text-[15px] font-medium mt-1">
                  kreditle
                </span>

                <span className="text-[15px] font-medium">
                  ilk alışa
                </span>
              </div>

            </div>
          </div>

          {/* Məhsul məlumatları */}
          <div className="w-[420px] flex-shrink-0 mt-[30px]">

            {/* Məhsulun adı */}
            <h1 className="text-2xl font-bold">
              {product.name}
            </h1>

            {/* Reytinq və rəy sayı */}
            <div className="flex items-center gap-2 mt-[20px]">
              <span className="text-[#FFB800] text-[20px]">
                ★★★★★
              </span>

              <span className="text-[15px] font-medium">
                4.8
              </span>

              <span className="text-[14px] text-gray-500">
                ({reviewCount} rəy)
              </span>
            </div>

            {/* Məhsul kodu və seçilmişlər */}
            <div className="flex items-center gap-5 mt-4">
              <span>
                Məhsulun kodu: {product.id}
              </span>

              <div className="flex items-center gap-2 text-[#FF4B81] cursor-pointer">
                <span className="text-[23px]">♡</span>
                <span className="text-[14px]">
                  Seçilmişlərə əlavə et
                </span>
              </div>
            </div>

            {/* Məhsul haqqında məlumat */}
            <div className="mt-7">
              <h2 className="text-[18px] font-bold">
                Məhsul haqqında məlumat
              </h2>

              <div className="flex flex-col gap-3 mt-4 text-[17px] text-black">
                <p>
                  <span className="font-semibold text-[#9497AD]">Brend:</span>{" "}
                  {product.brand || "Məlumat yoxdur"}
                </p>

                <p>
                  <span className="font-semibold text-[#9497AD]">Məhsulun növü:</span>{" "}
                  {product.category || "Məlumat yoxdur"}
                </p>

                <p>
                  <span className="font-semibold text-[#9497AD]">Məhsulun adı:</span>{" "}
                  {product.name}
                </p>

                <p>
                  <span className="font-semibold text-[#9497AD]">Məhsulun kodu:</span>{" "}
                  {product.id}
                </p>
              </div>
            </div>

            {/* Texniki göstəricilər */}
            <p className="text-[#FF4B81] text-[17px] font-medium mt-5 cursor-pointer">
              Texniki göstəricilər və təsvirə baxmaq
            </p>

          </div>

          {/* Kredit kalkulyatoru */}
          <div className="w-[400px] max-w-full flex-shrink-0 border-l border-gray-200 pl-6 font-sans mt-[30px] ml-[150px]">

            {/* Qiymət bloku */}
            <div className="flex flex-wrap items-center gap-3.5 mb-3">

              <span className="text-[38px] font-extrabold text-[#ea1c85] leading-none">
                {hasPrice ? `${price.toFixed(2)} ₼` : "Qiymət yoxdur"}
              </span>

              {oldPrice !== null && oldPrice > price && (
                <span className="text-xl font-bold text-[#7c8594] line-through">
                  {oldPrice.toFixed(2)} ₼
                </span>
              )}

              {discount > 0 && (
                <span className="bg-[#ef4478] text-white text-[13px] font-bold px-2 py-1 rounded">
                  -{discount}%
                </span>
              )}

            </div>

            {/* Sarı aylıq ödəniş etiketi */}
            <div className="inline-block bg-[#fed23f] text-[#1e2438] text-lg font-bold px-2.5 py-1.5 rounded mb-4">
              {monthlyPayment !== null
                ? `${monthlyPayment} ₼ x ${selectedMonth} ay`
                : "Aylıq ödəniş hesablanmır"}
            </div>

            {/* Kredit kalkulyatoru qutusu */}
            <div className="border border-gray-200 rounded-md p-4 mb-6">

              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 bg-[#b71c1c] rounded-[3px] flex items-center justify-center relative overflow-hidden">
                    <div className="w-3 h-3 bg-white rotate-45" />
                    <div className="absolute w-[2px] h-[18px] bg-[#b71c1c]" />
                  </div>

                  <span className="text-lg font-bold text-[#1e2438]">
                    Kredit kalkulyatoru
                  </span>
                </div>

                <span className="bg-[#d91ce5] text-white text-[13px] font-bold px-2.5 py-0.5 rounded">
                  0-0-{selectedMonth}
                </span>

              </div>

              {/* Ay seçim düymələri */}
              <div className="grid grid-cols-4 gap-2.5 mb-3.5">
                {months.map((month) => {
                  const isActive = selectedMonth === month;

                  return (
                    <button
                      key={month}
                      type="button"
                      onClick={() => setSelectedMonth(month)}
                      className={`py-3 rounded-md text-base border transition-all cursor-pointer ${isActive
                        ? "bg-[#fed23f] border-[#fed23f] font-semibold text-[#1e2438]"
                        : "bg-white border-gray-200 font-medium text-[#1e2438] hover:border-[#fed23f]"
                        }`}
                    >
                      {month} ay
                    </button>
                  );
                })}
              </div>

              {/* Kalkulyator alt info paneli */}
              <div className="bg-[#fed23f] text-[#1e2438] text-sm font-medium text-center py-2 px-3 rounded">
                0 ₼ komissiya, 0 ₼ ilkin ödəniş, {selectedMonth} aylıq kredit
              </div>

            </div>

            {/* Səbətə əlavə etmək düyməsi */}
            <button
              type="button"
              onClick={() =>
                alert(
                  `${product.name} (${selectedMonth} aylıq kreditlə) səbətə əlavə edildi!`
                )
              }
              className="w-full bg-[#ea1c85] hover:bg-[#d11474] text-white font-bold text-base py-4 rounded-md transition-colors cursor-pointer"
            >
              Səbətə əlavə etmək
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default Detail;
