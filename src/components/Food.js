import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';


const Food = (props) => {

  const {data} = props
  const [favorites, setFavorites] = useState(0)

const onAdd = () => {
  setFavorites(favorites+1)
}

const onRemove = () => {
  setFavorites(favorites-1)
  
  if (favorites <= 0) {
  setFavorites(0)  
  alert("You can't go below 0")
  }

}

const sum = favorites * props.price

return (

<div className='container'>
  <div className='border'>
      <img src={props.image} className="image"/>
      <div className='row'>
      <h2> {props.title} </h2>
      <p>{props.description}</p>
      </div>
      <div className='price'>
      <span> {props.price.toFixed(2)}$</span>
      </div>
      <Button variant="success" className="button" onClick={onAdd}>+</Button>
      <Button variant="danger" className="button" onClick={onRemove}>-</Button>
      <p className='row'> <strong> {props.title} count: {favorites} </strong> <strong> {sum.toFixed(2)}$ </strong> </p>
      </div>
      </div>
     
  )
}

export default Food