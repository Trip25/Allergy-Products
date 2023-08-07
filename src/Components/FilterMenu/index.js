import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

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

export default function FilterMenu({ allergies }) {
  const [selectedAllergies, setSelectedAllergies] = useState([])

  function handleChecked(e) {
    let allergyItem = e.target.innerText

    if (!selectedAllergies.includes(allergyItem)) {
      //checks if allergy is already in list, if it isn't, it will update the selectedAllergies

      setSelectedAllergies([...selectedAllergies, allergyItem]) //the dietary is added to selectedAllergies array
    } else {
      //remove allergy from list if it has already been selected previously

      setSelectedAllergies(
        selectedAllergies.filter((item) => item !== allergyItem)
      )
    }
    console.log(selectedAllergies)
  }

  return (
    <div>
      <Form>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          {allergies.map((allergen, index) => (
            <>
              <input
                type="checkbox"
                class="btn-check"
                id={`btncheck${index}`}
                autocomplete="off"
                // onChange={handleChecked}
              />
              <label
                class="btn btn-outline-primary"
                onClick={handleChecked}
                for={`btncheck${index}`}
              >
                {allergen}
              </label>
            </>
          ))}
        </div>
      </Form>
    </div>
  )
}
