import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state={
    wizards: [],
    whatDoesTheUserWantToSee: "All"
  }

  componentDidMount(){
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then((wizardsArr) => {
      this.setState({
        wizards: wizardsArr
      })
    })
  }


  changeWhatDoesTheUserWantToSee = (valueFromChild) => {
    this.setState({
      whatDoesTheUserWantToSee: valueFromChild
    })
  }

  returnsAnArray = () => {
    let arrayToReturn = this.state.wizards
    // [{}, {}, {}]
    if(this.state.whatDoesTheUserWantToSee !== "All"){
      arrayToReturn = this.state.wizards.filter((wizardPojo) => {
        return wizardPojo.house === this.state.whatDoesTheUserWantToSee
      })
    }
    return arrayToReturn
  }

  addOneWizardToState = (newlyCreatedWizard) => {
    let copyOfWizards = [...this.state.wizards, newlyCreatedWizard]
    this.setState({
      wizards: copyOfWizards
    })
  }

  deleteWizard = (wizId) => {
    let copyOfWizards = this.state.wizards.filter((wizardPojo) => {
      return wizardPojo.id !== wizId
    })
    this.setState({
      wizards: copyOfWizards
    })
  }

  render() {
    let arrayOfWizards = this.returnsAnArray()
    return (
      <main>
        <MaraudersMap
          whatDoesTheUserWantToSee={this.state.whatDoesTheUserWantToSee}
          changeWhatDoesTheUserWantToSee={this.changeWhatDoesTheUserWantToSee}
        />
        <GreatHall wizards={arrayOfWizards} deleteWizard={this.deleteWizard}/>
        <SortingHat addOneWizardToState={this.addOneWizardToState}/>
      </main>
    )
  }

}

export default Hogwarts;
