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
          thisIsThePropsFromGrandParent={props.title}
          boolean={ true }
          number={29}
          array={["hello", "this is an array"]}
          obj={ {hello: "abc"} }
          funcDefinition={ () => { console.log("hello") } }
        />
        <FoodItem foodName="Broccoli" foodType="Veggies"/>
        <FoodItem foodName="Spinach" foodType="Veggies"/>
        <FoodItem foodName="Water" foodType="H2O"/>
      </ul>
    </main>
  )
}

export default FoodContainer
