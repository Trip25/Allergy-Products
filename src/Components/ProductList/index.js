import { useState } from 'react';
import Products from '../Products/products.json'

export default function ProductList() {

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {Products.map((product, index) => {
                    return (
                        <li key={index}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.diet}</p>
                        </li>
                    )
                }
                )}

            </ul>
        </div>
    )
}
