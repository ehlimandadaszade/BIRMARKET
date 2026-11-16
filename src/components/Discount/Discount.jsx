import { useContext } from "react";
import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi.jsx";

function DiscountCard({ title, product, className = "", big = false }) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-[#A31DA5] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-[25%] -z-10 h-[80%] w-[60%] rotate-[-25deg] rounded-[45%] border-[20px] border-[#EC168F]/60"
      />

      <h3
        className={`relative z-10 font-bold leading-tight text-white ${
          big
            ? "p-6 text-4xl lg:p-8 lg:text-6xl"
            : "p-3 text-lg lg:p-4 lg:text-[clamp(18px,1.6vw,30px)]"
        }`}
      >
        {title}
      </h3>

      {product && (
        <img
          src={product.thumbnail}
          alt={product.title}
          className={`absolute bottom-0 right-0 object-contain object-bottom ${
            big ? "h-[78%] w-[95%]" : "h-[75%] w-full"
          }`}
        />
      )}
    </div>
  );
}

const Discount = () => {
  const context = useContext(GlobalContextApi);

  if (!context) {
    return <p className="p-8">GlobalProvider qoşulmayıb.</p>;
  }

  const { Api, loading } = context;

  if (loading) {
    return <p className="p-8">Yüklənir...</p>;
  }

  if (Api.length === 0) {
    return <p className="p-8">Məhsullar yüklənmədi.</p>;
  }

  function getProduct(category) {
    return Api.find((product) => product.category === category);
  }

  return (
    <section className="bg-white px-5 py-8 md:px-10 lg:px-[5%]">
      <div className="mx-auto max-w-[1920px]">
        {/* Başlıq və loqo */}
        <div className="mb-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#25254F] md:text-5xl">
            60%-dək endirim!
          </h2>

          <div
            aria-label="birmarket"
            className="flex shrink-0 items-center gap-3 text-[#F51B85]"
          >
            <svg
              viewBox="0 0 40 64"
              fill="none"
              aria-hidden="true"
              className="h-[46px] w-[29px] md:h-[58px] md:w-[36px]"
            >
              <path
                d="M20 6L35 32L20 58L5 32L20 6Z"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinejoin="round"
              />
            </svg>

            <span className="font-[Arial,sans-serif] text-[36px] font-normal leading-none tracking-[-0.045em] md:text-[48px]">
              birmarket
            </span>
          </div>
        </div>

        {/* Üst hissə */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          <DiscountCard
            title="Smartfonlar"
            product={getProduct("smartphones")}
            big
            className="col-span-2 aspect-square md:row-span-2 md:aspect-auto"
          />

          <DiscountCard
            title="Ətirlər"
            product={getProduct("fragrances")}
            className="aspect-square"
          />

          <DiscountCard
            title="Saatlar"
            product={getProduct("mens-watches")}
            className="aspect-square"
          />

          <DiscountCard
            title="Üzə qulluq"
            product={getProduct("skin-care")}
            className="aspect-square"
          />

          <DiscountCard
            title="Ev dekorları"
            product={getProduct("home-decoration")}
            className="aspect-square"
          />

          <DiscountCard
            title="Ərzaqlar"
            product={getProduct("groceries")}
            className="aspect-square"
          />

          <DiscountCard
            title="Planşetlər"
            product={getProduct("tablets")}
            className="col-span-2 min-h-[220px] md:col-span-3 md:min-h-0"
          />
        </div>

        {/* Alt hissə */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <DiscountCard
            title="Makiyaj"
            product={getProduct("beauty")}
            className="aspect-square"
          />

          <DiscountCard
            title="Ev mebeli"
            product={getProduct("furniture")}
            className="aspect-square"
          />

          <DiscountCard
            title="Mətbəx əşyaları"
            product={getProduct("kitchen-accessories")}
            className="aspect-square"
          />

          <DiscountCard
            title="İdman malları"
            product={getProduct("sports-accessories")}
            className="aspect-square"
          />

          <DiscountCard
            title="Notbuklar"
            product={getProduct("laptops")}
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;