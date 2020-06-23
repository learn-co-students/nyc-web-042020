import React from 'react'
import FoodItem from './FoodItem'

let FoodContainer = (props) => {
  return (
    <main>
      <p>{ props.title }</p>
      <ul>
        <FoodItem
          foodName={"Chicken"}
          foodType={"Protein"}
        />
        <FoodItem foodName="Broccoli" foodType="Veggies"/>
        <FoodItem foodName="Spinach" foodType="Veggies"/>
        <FoodItem foodName="Water" foodType="H2O"/>
      </ul>
    </main>
  )
}

export default FoodContainer
