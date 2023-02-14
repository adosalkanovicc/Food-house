import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import FoodHouse from './components/FoodHouse';
import Contact from './components/Contact';

const App = () => {
  
  //navigation bar

  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href="/">Food House</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-right">
          <Nav.Link as = {Link} to = "/" className='broj'> Home </Nav.Link>
          <Nav.Link as = {Link} to = "contact" className='broj'> Contact me </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
    <Route path='/' element={ <FoodHouse /> } />
    <Route path='contact' element={ <Contact /> } />
  </Routes>
    </div>
  )
}

export default App;
