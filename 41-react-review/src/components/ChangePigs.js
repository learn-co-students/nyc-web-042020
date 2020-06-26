import React from 'react'

class ChangePigs extends React.Component{



  handleChange = (evt) => {
    this.props.changeHowToRenderPigs(evt.target.value);
  }



  render(){
    return(
      <select value={this.props.howToRenderPigs} onChange={this.handleChange}>
        <option value="Alphabetical">
          Alphabetical
        </option>
        <option value="Weight">
          Weight
        </option>
        <option value="Greased">
          Greased
        </option>
        <option value="Non-Greased">
          Non-Greased
        </option>
      </select>
    )
  }

  
}

export default ChangePigs
