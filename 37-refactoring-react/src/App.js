import React from 'react';
import './App.css';
import FoodHeader from './FoodHeader'
import FoodContainer from './FoodContainer'
import NewFoodForm from './NewFoodForm'
import foods from './foods'


class App extends React.Component{

  state = {
    foodList: foods
  }

  render(){
    return (
      <div className="App">
        <FoodHeader/>
        <NewFoodForm/>
        <FoodContainer
          foods={this.state.foodList}
          title="Here are the foods you need to buy"
        />
      </div>
    )
  }

}

export default App;
