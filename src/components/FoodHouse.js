import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import data from '../data'
import Food from './Food';

const FoodHouse = (props) => {
    const {onAdd} = props
    const elements = data.map((element) => {
    return  <Col key={element.id} xs={12} md={6} lg={4} xl={4}>
      <Food 
       title={element.title}
       price={element.price} 
       image={element.image} 
       description={element.description}  
       onAdd = {onAdd}
       /> 
     
      </Col> 
  })

  return (
  <div className='container'>
  <h3>Your Food. Now you can order.</h3>
  <Row>
  {elements}
  <Button variant="dark" className="btn">Order</Button>
  </Row>
  </div>
  )
}

export default FoodHouse