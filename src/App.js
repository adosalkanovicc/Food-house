import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import Favorites from './components/Favorites';
import FoodHouse from './components/FoodHouse';

const App = () => {

  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href="#home">Food House</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-right">
          <Nav.Link as = {Link} to = "/" className='broj'>Home</Nav.Link>
          <Nav.Link as = {Link} to = "favorites" className='broj'>Favorite</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
    <Route path='/' element={ <FoodHouse /> } />
    <Route path='favorites' element={ <Favorites /> } />
  </Routes>
    </div>
  )
}

export default App;
