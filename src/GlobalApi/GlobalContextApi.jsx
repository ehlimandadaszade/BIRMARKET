
import { createContext, useEffect, useState } from "react";

export const GlobalContextApi = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [Api, setApi] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://elan-api-lgwm.onrender.com/api/products?limit=100"
        );

        if (!res.ok) {
          throw new Error("Məhsulları yükləmək mümkün olmadı");
        }

        const result = await res.json();

        setApi(Array.isArray(result.data) ? result.data : []);
      } catch (err) {
        console.error("API xətası:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <GlobalContextApi.Provider value={{ Api, loading, error }}>
      {children}
    </GlobalContextApi.Provider>
  );
};
