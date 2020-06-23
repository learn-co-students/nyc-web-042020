import React from 'react'

class FoodItem extends React.Component {

  handleClick = (evt) => {
    console.log("We will come back to this!");

  }

  render(){
    let {foodType, foodName, count} = this.props.food
    return(
      <li className="container">
        <img src="https://static.thenounproject.com/png/166411-200.png" alt="grocery" />
        <h3>{ foodName }</h3>
        <p>Type: { foodType }</p>
        <button
          onClick={ this.handleClick }
        >
          In Cart: {count}
        </button>
      </li>
    )
  }

}

export default FoodItem
