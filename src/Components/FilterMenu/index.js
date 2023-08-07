import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

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

export default function FilterMenu({allergies}) {
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [checked, setChecked] = useState([]);

    function handleChecked(e) {
        setChecked(e.target.value)
    }
    
        return (
            <div>
                <Form>
                    <div classname="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        {allergies.map((allergen, index) => (
                            <>
                              <input type="checkbox" class="btn-check" id={`btncheck${index}`} autocomplete="off"/>
                              <label class="btn btn-outline-primary" for={`btncheck${index}`}>{allergen}</label>
                            </>
                        ))}
                    </div>
                </Form>
            </div>
        )
    }