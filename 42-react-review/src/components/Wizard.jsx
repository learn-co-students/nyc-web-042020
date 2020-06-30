import React, { Component } from 'react';

class Wizard extends Component {

  state={
    showImage1: true
  }

  handleClick = (e) => {
    this.setState({
      showImage1: !this.state.showImage1
    })

    // this.setState((prevState) => {
      // return {
      //   showImage1: !prevState.showImage1
      // }
    // })
  }

  handleDelete = (e) => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then((res) => {
      this.props.deleteWizard(this.props.wizard.id)
    })
  }

  render() {
    let {name, image1, image2, house, wand} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border" >
                <img onClick={this.handleClick} src={
                  this.state.showImage1
                    ?
                  image1
                    :
                  image2
                } alt={name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleDelete}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
