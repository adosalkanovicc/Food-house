import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import data from '../data'
import Food from './Food';


const FoodHouse = () => {
 
  const elements = data.map((element) => {
    return <Col key={element.id} xs={8} md={6} lg={4} xl={4}><Food title={element.title} price={element.price} image={element.image}  /> </Col> 
  })

  return (

<div className='container'>
<h2>Your Food. Now you can order.</h2>
  <Row>

   {elements}

   </Row>



 </div>

  )
}

export default FoodHouse