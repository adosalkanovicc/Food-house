import React from 'react'
import Food from './Food'
import FoodHouse from './FoodHouse'
import data from '../data'
import { Col } from 'react-bootstrap'



const Favorites = (props) => {
  const {onAdd, elements} = props
  console.log(elements)
 
  return (
    <div className='container'>
      <button onClick={onAdd}>adada</button>
    </div>
    
  )
}

export default Favorites