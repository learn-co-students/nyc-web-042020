import React from 'react';
import FoodContainer from './Components/FoodContainer'
import FoodForm from './Components/FoodForm'
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:4000/foods")
    .then(r => r.json())
    .then((foods) => {
      this.props.setAllFoods(foods)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to our Store</h1>
        <FoodForm/>
        <FoodContainer/>
      </div>
    );
  }
  
}


// ActionCreator - Return value of an action creator is an action
// Action => POJO that contains the key of type && payload
let setAllFoods = (foodsArr) => {
  return {
    type: "SET_ALL_FOODS",
    payload: foodsArr
  }
}

// mapDispatchToProps is a POJO that will be merged as props to App
let mapDispatchToProps = {
  setAllFoods: setAllFoods
}

export default connect(null, mapDispatchToProps)(App);
// Because App doesn't need any information pulled from Global State, null is passed in as mapStateToProps
// mapDispatchToProps will decide what action gets dispatched