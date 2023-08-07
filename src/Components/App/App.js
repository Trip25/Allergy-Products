import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import productData from '../../products.json'

import { ProductProvider } from '../../context/productContext'

import { Container, Navbar } from 'react-bootstrap'
import ProductList from '../ProductList/ProductList.js'
import FilterMenu from '../FilterMenu/FilterMenu.js'

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

  return (
    <ProductProvider>
      <div className="App">
        <Container>
          <LogoNavigation />
          <FilterMenu allergies={uniqueAllergies} />
          <ProductList products={productData} />
        </Container>
      </div>
    </ProductProvider>
  )
}

export default App
