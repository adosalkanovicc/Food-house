import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';


const Food = (props) => {


  return (

<div className='container'>
      <img src={props.image} className="image"/>
      
      <div className='row'>
      <h2> {props.title} </h2>
      <span> {props.price}</span>
      </div>
    
      <Button variant="primary">Add to Favorites</Button>
     <div>
     
     </div>
      <hr />
      </div>
     
  )
}

export default Food