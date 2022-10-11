import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';


const Food = (props) => {
  return (

  <Container className='wrapper'>

      <img src={props.image} className="image"/>
      <h1> {props.title} </h1>
      <p> {props.price}</p>
      <Button variant="primary">Buy now</Button>
      <hr />

   
  </Container>
    
  )
}

export default Food