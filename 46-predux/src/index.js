import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX STUFF BELOW
import {createStore} from 'redux'

let foodInitialState = {
  foods: [],
  number: 0
}

// The return value of our reducer becomes our global state
const foodReducer = (state = foodInitialState, action) => {

  switch(action.type){
    case "ADD_NUMBER":
      return {
        ...state, 
        number: state.number + action.payload
      }
    case "ADD_ARRAY":
      let copyOfFoods = [...state.foods, action.payload]
      return {
        ...state, 
        foods: copyOfFoods
      }
    default: 
      return state
  }
}


let theStoreObject = createStore(foodReducer)
console.log("SET UP",theStoreObject.getState())

let theActionToAdd1 = {
  type: "ADD_NUMBER",
  payload: 1
}

theStoreObject.dispatch(theActionToAdd1)
theStoreObject.dispatch(theActionToAdd1)
theStoreObject.dispatch(theActionToAdd1)
theStoreObject.dispatch(theActionToAdd1)
theStoreObject.dispatch(theActionToAdd1)
theStoreObject.dispatch({
  type: "ADD_NUMBER",
  payload: 35
})

theStoreObject.dispatch({
  type: "ADD_ARRAY",
  payload: {
    name: "Doritos",
    flavorProfile: "Ranchy"
  }
})

console.log("AFTER DISPATCH", theStoreObject.getState())



















ReactDOM.render(
    <App />,
  document.getElementById('root')
);


