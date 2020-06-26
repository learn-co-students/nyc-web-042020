import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import ChangePigs from "./ChangePigs";

import hogs from "../porkers_data";


class App extends Component {

  state = {
    piggies: [],
    howToRenderPigs: "Alphabetical"
  }



  changeHowToRenderPigs = (termFromTheChild) => {
    this.setState({
      howToRenderPigs: termFromTheChild
    })
  }



  decideWhichPigsToSendDown = () => {
    let theArrayToDisplay = this.state.piggies
    if (this.state.howToRenderPigs === "Alphabetical") {
      theArrayToDisplay = [...this.state.piggies].sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name)
      })
    }
    if (this.state.howToRenderPigs === "Greased") {
      theArrayToDisplay = this.state.piggies.filter((pig) => {
        return pig.greased
      })
    }
    if (this.state.howToRenderPigs === "Non-Greased") {
      theArrayToDisplay = this.state.piggies.filter((pig) => {
        return !pig.greased
      })
    }
    if (this.state.howToRenderPigs === "Weight") {
      theArrayToDisplay = [...this.state.piggies].sort((pigA, pigB) => {
        return pigA.weight - pigB.weight
      })
    }
    return theArrayToDisplay
  }



  componentDidMount(){
    // fetch
    // .then()
    this.setState({
      piggies: hogs
    })
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <ChangePigs
          changeHowToRenderPigs={this.changeHowToRenderPigs}
          howToRenderPigs={this.state.howToRenderPigs}
        />
        <PigContainer
          piggies={this.decideWhichPigsToSendDown()}
        />
      </div>
    );
  }


  
}

export default App;
