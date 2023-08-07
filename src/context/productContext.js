import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {

    const [allergiesArray, setAllergiesArray] = useState([]);

    const addAllergies = (allergy) => {
        setAllergiesArray([...allergiesArray, allergy]);
    }

    const removeAllergies = (allergy) => {
        setAllergiesArray(allergiesArray.filter(item => item !== allergy));
    }


    return (
        <ProductContext.Provider value={{allergiesArray, addAllergies, removeAllergies}}>
            {children} 
        </ProductContext.Provider>
    )
}

export function useProductContext() { 
    return useContext(ProductContext)
}