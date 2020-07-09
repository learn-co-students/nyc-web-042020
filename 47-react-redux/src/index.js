import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX STUFF BELOW
import {createStore} from 'redux'
import {Provider} from 'react-redux'

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


let theStoreObject = createStore(
  foodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )






ReactDOM.render(
    <Provider store={theStoreObject}>
      <App />
    </Provider>,
  document.getElementById('root')
);


