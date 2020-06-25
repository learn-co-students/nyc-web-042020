import React from 'react'

class FoodItem extends React.Component {

  state={
    className: ""
  }

  handleClick = (evt) => {
    let randomNumber = Math.random() > 0.5 ? 20 : -5
    let updatedNumber = this.props.food.count + randomNumber

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
    fetch(`http://localhost:3000/foods/${this.props.food.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((deletedFood) => {
        this.props.deleteFoodFromArray(this.props.food.id)
      })
  }

  componentWillUnmount(){
    console.log(this.props.food.foodName, "GOODBYE");
  }

  componentDidUpdate(prevProps, prevState){
    // All your setState in componentDidUpdate should be in an if-condition
    if(this.props.food.count > prevProps.food.count){
      this.setState({
        className: "liked"
      })
    }

    if (this.props.food.count < prevProps.food.count){
      this.setState({
        className: "disliked"
      })
    }
  }

  render(){
    let {foodType, foodName, count} = this.props.food
    return(
      <li className={`container ${this.state.className}`}>
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
