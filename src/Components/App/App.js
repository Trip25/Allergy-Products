import './App.css'
import ProductList from '../../products.json'
import FilterMenu from '../FilterMenu/index.js';

function App() {

  let allAllergies = []

  ProductList.map(({diet}) => {
    allAllergies.push(...diet)
  })

  let uniqueAllergies = [...new Set(allAllergies)];

    console.log(uniqueAllergies)

  return (
    <div className="App">
    <FilterMenu allergies={uniqueAllergies} />
      
    </div>
  )
}

export default App
