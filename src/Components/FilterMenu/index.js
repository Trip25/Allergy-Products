import React, {useState} from 'react';
import "../../products.json";

/*Plan
Filter for allergy 
so it will go through "diet" in products.json
use checkbox to select 
if checked, we want to show products that satisfy that diet
set an allergy array

display in div
product.name
product.description
product.price
product.diet (show all that is checked)
*/

export default function FilterMenu() {
    const allergies = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Soy-Free"];
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [checked, setChecked] = useState(false);

    function handleChecked(e) {
        setChecked(e.target.value)
    }
    
        return (
            <div>
                <h1>Filter Menu</h1>
            </div>
        )
    }