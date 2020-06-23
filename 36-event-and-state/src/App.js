import React from 'react';
import './App.css';
import FoodHeader from './FoodHeader'
import FoodContainer from './FoodContainer'

function App() {

  return (
    <div className="App">
      <FoodHeader/>
      <FoodContainer title="Here are the foods you need to buy"/>
    </div>
  );
}

export default App;
