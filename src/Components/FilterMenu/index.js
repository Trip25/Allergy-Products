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
                    {allergies.map((allergen, index) => (
                        <div key={`inline-${allergen}`} className="mb-3">
                        <Form.Check
                            inline
                            label={allergen}
                            name="group1"
                            type="checkbox"
                            id={`inline-${allergen}-1`}
                        />
                        </div>
                    ))}
                </Form>
            </div>
        )
    }