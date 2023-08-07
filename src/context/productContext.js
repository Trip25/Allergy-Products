import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {

    const [allergiesArray, setAllergies] = useState([]);

    const addAllergies = (allergy) => {
        setAllergies([...allergiesArray, allergy]);
    }

    const removeAllergies = (allergy) => {
        setAllergies(allergiesArray.filter(item => item !== allergy));
    }


    return (
        <ProductContext.Provider values={{allergiesArray, addAllergies, removeAllergies}}>
            {children} 
        </ProductContext.Provider>
    )
}

export default function useProductContext() { 
    return(useContext(ProductContext))}