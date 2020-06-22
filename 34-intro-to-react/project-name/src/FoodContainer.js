import React from 'react'
import FoodItem from './FoodItem'

let FoodContainer = () => {
  return (
    <main>
      <p>Here is what we are selling:</p>
      <ul>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
      </ul>
    </main>
  )
}

export default FoodContainer
