import smartfon from "../../assets/smartfon.png";
import etir from "../../assets/etir.png";
import paltaryuyan from "../../assets/paltaryuyan.png";
import uzeQulluq from "../../assets/uze-qulluq.png";
import dekor from "../../assets/dekor.png";
import yuma from "../../assets/yuma.png";
import televizor from "../../assets/televizor.png";
import makiyaj from "../../assets/makiyaj.png";
import mebel from "../../assets/mebel.png";
import qabQacaq from "../../assets/qab-qacaq.png";
import kondisioner from "../../assets/kondisioner.png";
import notbuk from "../../assets/notbuk.png";

function DiscountCard({
  title,
  image,
  className = "",
  big = false,
  wide = false,
}) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-[#A31DA5] ${className}`}
    >
      {/* Arxa fon naxışı */}
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[24%] -z-10 h-[85%] w-[60%] rotate-[-25deg] rounded-[45%] border-[18px] border-[#EC168F]/60 lg:border-[24px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] right-[20%] -z-10 h-[65%] w-[35%] rotate-[-25deg] rounded-[45%] border-[12px] border-[#EC168F]/40"
      />

      <h3
        className={`relative z-10 m-0 font-bold leading-tight tracking-[-0.025em] text-white ${
          big
            ? "p-6 text-4xl lg:p-8 lg:text-[clamp(36px,3.5vw,64px)]"
            : wide
              ? "p-5 text-3xl lg:text-4xl"
              : "p-3 text-lg lg:p-4 lg:text-[clamp(18px,1.6vw,32px)]"
        }`}
      >
        {title}
      </h3>

      <img
        src={image}
        alt={title}
        className={`absolute bottom-0 right-0 block max-w-none object-contain object-bottom ${
          big
            ? "h-[78%] w-[95%]"
            : wide
              ? "h-[95%] w-[65%] object-right-bottom"
              : "h-[76%] w-full"
        }`}
      />
    </div>
  );
}

const Discount = () => {
  return (
    <section className="bg-white px-5 py-8 font-sans md:px-10 lg:px-[5%]">
      <div className="mx-auto max-w-[1920px]">
        {/* Başlıq və loqo */}
        <div className="mb-10 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mb-12">
          <h2 className="m-0 text-3xl font-bold tracking-tight text-[#25254F] md:text-5xl">
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
            image={smartfon}
            big
            className="col-span-2 aspect-square md:row-span-2 md:aspect-auto"
          />

          <DiscountCard
            title="Ətirlər"
            image={etir}
            className="aspect-square"
          />

          <DiscountCard
            title="Paltaryuyanlar"
            image={paltaryuyan}
            className="aspect-square"
          />

          <DiscountCard
            title="Üzə qulluq"
            image={uzeQulluq}
            className="aspect-square"
          />

          <DiscountCard
            title="Ev dekorları"
            image={dekor}
            className="aspect-square"
          />

          <DiscountCard
            title="Yuma vasitələri"
            image={yuma}
            className="aspect-square"
          />

          <DiscountCard
            title="Televizorlar"
            image={televizor}
            wide
            className="col-span-2 min-h-[220px] md:col-span-3 md:min-h-0"
          />
        </div>

        {/* Alt hissə */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <DiscountCard
            title="Makiyaj"
            image={makiyaj}
            className="aspect-square"
          />

          <DiscountCard
            title="Ev mebeli"
            image={mebel}
            className="aspect-square"
          />

          <DiscountCard
            title="Qab-qacaq"
            image={qabQacaq}
            className="aspect-square"
          />

          <DiscountCard
            title="Kondisionerlər"
            image={kondisioner}
            className="aspect-square"
          />

          <DiscountCard
            title="Notbuklar"
            image={notbuk}
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;