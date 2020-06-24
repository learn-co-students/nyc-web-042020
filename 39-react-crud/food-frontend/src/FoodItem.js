import React from 'react'

class FoodItem extends React.Component {

  handleClick = (evt) => {
    let updatedNumber = this.props.food.count + 13

    fetch(`http://localhost:3000/foods/${this.props.food.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        count: updatedNumber
      })
    })
      .then(r => r.json())
      .then((updatedFoodObject) => {
        this.props.updateFoodFromArray(updatedFoodObject)
      })


  }

  handleDelete = (evt) => {
    // Delete Fetch
    fetch(`http://localhost:3000/foods/${this.props.food.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((deletedFood) => {
        console.log(deletedFood)
        console.log(this.props)
        // Delete from frontend
        this.props.deleteFoodFromArray(this.props.food.id)
      })
  }

  render(){
    let {foodType, foodName, count} = this.props.food
    return(
      <li className="container">
        <img src="https://static.thenounproject.com/png/166411-200.png" alt="grocery" />
        <button className="delButton" onClick={this.handleDelete}>
          X
        </button>
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
