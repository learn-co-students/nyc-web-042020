import React from 'react'

class FoodItem extends React.Component {

  render(){
    console.log("PROPS OF FOOD ITEM:", this.props);
    const {foodName, foodType} = this.props
    // ALL YOUR LOGIC CAN GO HERE
    
    return(
      <li className="container">
        <img src="https://static.thenounproject.com/png/166411-200.png" alt="grocery" />
        <h3>{ foodName }</h3>
        <p>Type: { foodType }</p>
      </li>
    )
  }

}

export default FoodItem
