import React, { Component } from 'react';

class NewFoodForm extends Component {

  state={
    foodName: "Mangos",
    foodType: "Fruit"
  }

  handleInput = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="f_name">Name</label>
        <input
          type="text"
          name="foodName"
          id="f_name"
          autoComplete="off"
          value={this.state.foodName}
          onChange={this.handleInput}
        />
        <label htmlFor="f_type">Type</label>
        <input
          type="text"
          name="foodType"
          id="f_type"
          autoComplete="off"
          value={this.state.foodType}
          onChange={this.handleInput}
        />
        <input type="submit" value="Log a New Food" />
      </form>
    );
  }

}

export default NewFoodForm;
