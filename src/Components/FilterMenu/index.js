import React, {useState} from 'react';
import "../../products.json";
import Form from 'react-bootstrap/Form';

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
                <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="3"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="4"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
           <Form.Check
            inline
            label="5"
            name="group1"
            type={type}
            id={`inline-${type}-5`}
          />
           <Form.Check
            inline
            label="6"
            name="group1"
            type={type}
            id={`inline-${type}-6`}
          />
        </div>
      ))}
    </Form>
            </div>
        )
    }