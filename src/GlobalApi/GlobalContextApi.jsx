import { createContext, useEffect, useState } from "react";


export const GlobalContextApi = createContext(null);


export const GlobalProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
    const [Api, setApi] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>{
                setApi(data.products)
                setLoading(false);
            })  
            .catch(() => setLoading(false));
    },[])

   
    

    return (
        <GlobalContextApi.Provider value={{Api,loading}}>
            {children}
        </GlobalContextApi.Provider>
    );
};
