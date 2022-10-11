import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import data from '../data'
import Food from './Food';


const FoodHouse = (props) => {
 
  const elements = data.map((element) => {
    return <Food title={element.title} price={element.price} image={element.image} xs="2" />
  })

  return (
  <Container> 

 {elements}

  </Container>
  )
}

export default FoodHouse