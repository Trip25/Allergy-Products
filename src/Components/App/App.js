import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, Nav } from 'react-bootstrap';

import ProductList from '../ProductList'
import FilterMenu from '../FilterMenu';

const LogoNavigation = () => {
  return (
    <Navbar className='border-bottom'>
    <Container className="d-flex justify-content-center">
      <Navbar.Brand href="#home">Allergy App </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

function App() {
  return (
    <div className="App">
      <LogoNavigation/ >
      <FilterMenu/>
      <ProductList />
    </div>
  )
}

export default App
