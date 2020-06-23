import React from 'react'

class FoodItem extends React.Component {

  state = {
    count: 0,
    inStock: true,
    string: "Hello"
  }

  handleClick = (evt) => {
    // handleClick is an instance method
      // it would be great if `this` was the instance

    // Baseless functions get their value of `this` from invocation
      // React is the one who invokes event handlers, React decides to make `this` undefined when invoked
    // Arrow functions get their value of `this` from definition

    // Fill partialState with any key-value that you want to overwrite in initial state
      // partialState gets merged with old state

    let partialState = {
      count: this.state.count + 1
    }
    let callBackFunc = () => {console.log("INSIDE CALLBACK", this.state)}
    this.setState(partialState, callBackFunc)
    // this.setState({}, () => {})


    // FUNCTIONAL SETSTATE:

    // let firstCallback = (prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // }

          // the return value of the firstCallback gets merged into old state

      // this.setState(firstCallback)

    // setState triggers a re-render (DOM gets updated without page refreshing)
      // setState is asynchronous because React batches all state changes
      // setState actually happens after the function fires
  }



  render(){
    const {foodName, foodType} = this.props
    return(
      <li className="container">
        <img src="https://static.thenounproject.com/png/166411-200.png" alt="grocery" />
        <h3>{ foodName }</h3>
        <p>Type: { foodType }</p>
        <button
          onClick={ this.handleClick }
        >
          In Cart: {this.state.count}
        </button>
      </li>
    )
  }

}

export default FoodItem
