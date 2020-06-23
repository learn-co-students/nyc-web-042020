import React from 'react'
import FoodItem from './FoodItem'

let FoodContainer = (props) => {
  console.log(props, "<- PROPS OF FOOD CONTAINER");
  // [{}, {}] -> [<>,<>]
  let arrayOfComponents = props.foods.map((foodPOJO) => {
    return <FoodItem
      food={foodPOJO}
      key={foodPOJO.id}

    />
  })


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
