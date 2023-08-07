import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import productData from '../../products.json'

import { Container, Navbar } from 'react-bootstrap'
import ProductList from '../ProductList/ProductList.js'
import FilterMenu from '../FilterMenu/FilterMenu.js'
import { useEffect, useState } from 'react'

const LogoNavigation = () => {
  return (
    <Navbar className="border-bottom">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">Allergy App </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

function App() {
  let allAllergies = []
  productData.map(({ diet }) => allAllergies.push(...diet))

  const uniqueAllergies = [...new Set(allAllergies)]

  const [productList, setProductList] = useState([])


  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <Container>
        <LogoNavigation />
        <FilterMenu allergies={uniqueAllergies} />
        <ProductList products={productData} />
      </Container>
    </div>
  )
}

export default App
