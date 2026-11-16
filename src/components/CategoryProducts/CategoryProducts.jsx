
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { FaSpinner } from "react-icons/fa";

import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi";
import Cart from "../Cart/Cart";

const categories = {
  telefonlar: "Mobil telefonlar və smartfonlar",
  notbuklar: "Notbuklar",
  meiset: "İri məişət texnikası",
  tv: "Televizorlar",
  gozelik: "Gözəllik və sağlamlıq üçün texnika",
  bag: "Bitkilər üçün müdafiə və qulluq vasitələri",
  saat: "Ağıllı saatlar və fitnes qolbaqları",
  idman: "Velosiped idmanı",
  avtomobil: "Avtomobil üçün aksessuarlar",
  usaq: "Uşaqlar üçün oyuncaqlar və oyunlar",
  temir: "Tikinti alətləri",
};

function CategoryProducts() {
  const { category } = useParams();
  const { Api, loading, error } = useContext(GlobalContextApi);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <FaSpinner className="animate-spin text-blue-600" size={30} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!Array.isArray(Api) || Api.length === 0) {
    return (
      <p className="text-center py-10">
        Məhsul tapılmadı.
      </p>
    );
  }

  const selectedCategory = categories[category];

  const filteredProducts = Api.filter(
    (element) => element.category === selectedCategory
  );

  return (
    <section className="w-full">
      <div className="w-[90%] mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory || "Kateqoriya"}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center py-10">
            Bu kateqoriyada məhsul tapılmadı.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((element) => (
              <Link
                key={element.id}
                to={`/product/${element.id}`}
                className="block"
              >
                <Cart
                  id={element.id}
                  image={element.images}
                  title={element.name}
                  price={element.price}
                  oldPrice={element.oldPrice}
                  discount={
                    element.discountPercent
                      ? `-${element.discountPercent}%`
                      : ""
                  }
                  badge={element.category}
                  monthly={(element.price / 12).toFixed(2)}
                  reviews={element.rating?.count || 0}
                  rating={element.rating?.average || 0}
                  onAddToCart={() =>
                    console.log(
                      `${element.name} səbətə əlavə olundu`
                    )
                  }
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryProducts;
