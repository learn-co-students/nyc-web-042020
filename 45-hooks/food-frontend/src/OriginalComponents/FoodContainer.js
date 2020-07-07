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

  return (
    <main>
      <p>{ props.title }</p>

      { 
          arrayOfComponents.length > 0 
          ?
          <ul>
            {arrayOfComponents}
          </ul>
          : 
          <p>You don't seem to have any food!</p>
      }
  
    </main>
  )
}

export default FoodContainer
