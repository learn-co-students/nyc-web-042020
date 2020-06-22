import React from 'react';
import './App.css';
import FoodHeader from './FoodHeader'
import FoodContainer from './FoodContainer'

function App() {

  return (
    <div className="App">
      <FoodHeader></FoodHeader>
      <FoodHeader/>
      <FoodHeader/>
      <FoodContainer/>
    </div>
  );
}

export default App;
