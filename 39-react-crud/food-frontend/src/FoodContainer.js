import React from 'react'
import FoodItem from './FoodItem'

let FoodContainer = (props) => {
  // [{}] -> [<>]
  let arrayOfComponents = props.foods.map((foodPOJO) => {
    return <FoodItem
      deleteFoodFromArray={props.deleteFoodFromArray}
      updateFoodFromArray={props.updateFoodFromArray}
      food={foodPOJO}
      key={foodPOJO.id}
    />
  })

  let helperArray = []
  let helperMethod = () => {

  }


  return (
    <main>
      <p>{ props.title }</p>
      <ul>
        {arrayOfComponents}
      </ul>
    </main>
  )
}

export default FoodContainer
