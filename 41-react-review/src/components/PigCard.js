import React, {Component} from 'react'

class PigCard extends Component{

  state={
    clickedByUser: false
  }



  handleLiClick = (evt) => {
    this.setState({
      clickedByUser: !this.state.clickedByUser
    })
    // this.setState((prevState) => {
      // return {
        // clickedByUser: !prevState.clickedByUser
      // }
    // })
  }



  render(){
    let imageName = this.props.pig.name.toLowerCase().replace(/ /g, "_")
    // let imageName = this.props.pig.name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${imageName}.jpg`)

    return(
      <li className="pigTile" onClick={this.handleLiClick}>
        <p>{this.props.pig.name}</p>
        <img src={pigImage} alt={this.props.pig.name}/>
        { this.state.clickedByUser
          ?
            <div>
              <p>Weight: {this.props.pig.weight} kilograms</p>
              <p>Medal Won: {this.props.pig['highest medal achieved']} </p>
              <p>{this.props.pig.greased ? "Greasy" : "Clean" } </p>
            </div>
          :
            null
        }
      </li>
    )
  }

}

export default PigCard
