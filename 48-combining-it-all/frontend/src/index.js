import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Routing Stuff below
import {BrowserRouter} from 'react-router-dom'

// REDUX STUFF BELOW
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'



// ****************

let foodInitialState = {
  foods: []
}

// The return value of our reducer becomes our global state
const foodReducer = (state = foodInitialState, action) => {

  switch(action.type){
    case "SET_ALL_FOODS":
      
      return {
        ...state,
        foods: action.payload
      }
    default: 
      return state
  }
}

// ****************

let userInitialState = {
  id: 0,
  username: "",
  user_foods: [],
  token: ""
}

let userReducer = (state = userInitialState, action) => {
  switch(action.type){
    case "SET_USER_INFO":
      let singleNestedObject = { 
        ...action.payload.user, 
        token: action.payload.token
      }
      // {...state, ...singleNestedObject}
      return {
        ...state,
        username: action.payload.user.username,
        token: action.payload.token,
        id: action.payload.user.id,
        user_foods: action.payload.user.user_foods
      }

    case "DELETE_ONE_FOOD":
      let deletedArray = state.user_foods.filter((user_food)=> {
        return user_food.id !== action.payload
      })
      return {
        ...state,
        user_foods: deletedArray
      }
    default: 
      return state
  }
}



// ****************

// The keys of this object become the highest level keys of our global state
let aSingleObject = {
  foodInformation: foodReducer,
  userInformation: userReducer
}

let rootReducer = combineReducers(aSingleObject)

let theStoreObject = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )






ReactDOM.render(
  <BrowserRouter>
    <Provider store={theStoreObject}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


