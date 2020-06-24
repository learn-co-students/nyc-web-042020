import React from 'react';
import './App.css';
import FoodHeader from './FoodHeader'
import FoodContainer from './FoodContainer'
import NewFoodForm from './NewFoodForm'



class App extends React.Component{

  state = {
    foodList: []
  }

  componentDidMount(){
    // Lifecycle method -> Class Components
      // Only fire once if using it in App
    fetch("http://localhost:3000/foods")
      .then(r => r.json())
      .then((arrayOfFoods) => {
        this.setState({
          foodList: arrayOfFoods
        })
      })
  }

  // Definition of inverse-dataflow
    // Probably should have arguments
    // Those arguments are coming from the child
    // We use those arguments to affect state of parent
  addOneFoodToArray = (foodInstance) => {
    console.log(foodInstance);
    console.log(this.state);
    // this.setState
  }

  render(){
    console.log("APP STATE:",this.state);
    return (
      <div className="App">
        <FoodHeader/>

        <NewFoodForm
          addOneFoodToArray={this.addOneFoodToArray}
        />

        <FoodContainer
          foods={this.state.foodList}
          title="Here are the foods you need to buy"
        />
      </div>
    )
  }

}

export default App;
