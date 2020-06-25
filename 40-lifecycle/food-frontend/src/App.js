import React from 'react';
import './App.css';
import FoodHeader from './FoodHeader'
import FoodContainer from './FoodContainer'
import NewFoodForm from './NewFoodForm'


class App extends React.Component{

  state = {
    foodList: [],
    searchTerm: ""
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  returnsAnArray = () => {
    let theArrayToReturn = this.state.foodList.filter((foodPojo) => {
      return (
        foodPojo.foodName.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        foodPojo.foodType.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })

    return theArrayToReturn
  }

  componentDidMount(){
    fetch("http://localhost:3000/foods")
      .then(r => r.json())
      .then((arrayOfFoods) => {
        this.setState({
          foodList: arrayOfFoods
        })
      })
  }

  addOneFoodToArray = (foodInstance) => {
    let copyOfList = [...this.state.foodList, foodInstance]

    this.setState({
      foodList: copyOfList
    })
  }

  updateFoodFromArray = (updatedFoodInstance) => {

    let copyOfList = this.state.foodList.map((food) => {
      if(food.id === updatedFoodInstance.id){
        return updatedFoodInstance
      } else {
        return food
      }
    })

    this.setState({
      foodList: copyOfList
    })  

  }

  deleteFoodFromArray = (idFromChild) => {
    let copyOfList = this.state.foodList.filter((food) => {
      return food.id !== idFromChild
    })

    this.setState({
      foodList: copyOfList
    })
  }
  
  render(){
    const {foodList, searchTerm} = this.state
    return (
      <div className="App">
        <FoodHeader
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />

        <NewFoodForm
          addOneFoodToArray={this.addOneFoodToArray}
        />

        <FoodContainer
          foods={this.returnsAnArray()}
          deleteFoodFromArray={this.deleteFoodFromArray}
          updateFoodFromArray={this.updateFoodFromArray}
          title="Here are the foods you need to buy"
        />
      </div>
    )
  }

}

export default App;
