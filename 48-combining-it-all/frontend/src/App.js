import React from 'react';
import FoodContainer from './Components/FoodContainer'
import Profile from './Components/Profile'
import FoodForm from './Components/FoodForm'
import './App.css';
import Form from './Form'
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:4000/foods")
    .then(r => r.json())
    .then((foods) => {
      this.props.setAllFoods(foods)
    })

    if(localStorage.token){
      fetch("http://localhost:4000/users/stay_logged_in",{
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)

    }
  }


  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if(resp.user){
      // SEND INFO ABOUT THE USER TO OUR GLOBAL STATE
      this.props.setUserInfo(resp)
      localStorage.token = resp.token
      this.props.history.push("/profile")
    }
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    if(this.props.loggedIn){
      return <Profile />
    } else {
      this.props.history.push("/login")
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to our Store</h1>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={this.renderProfile}/>
        </Switch>
        <FoodContainer />
      </div>
    );
  }
  
}


// ActionCreator - Return value of an action creator is an action
// Action => POJO that contains the key of type && payload
let setAllFoods = (foodsArr) => {
  return {
    type: "SET_ALL_FOODS",
    payload: foodsArr
  }
}

let setUserInfo = (userInfo) => {
  return {
    type: "SET_USER_INFO",
    payload: userInfo
  }
}


// mapDispatchToProps is a POJO that will be merged as props to App
let mapDispatchToProps = {
  setAllFoods: setAllFoods,
  setUserInfo: setUserInfo
}


let mapStateToProps = (globalState) => {
  return {
    loggedIn: !!globalState.userInformation.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
// Because App doesn't need any information pulled from Global State, null is passed in as mapStateToProps
// mapDispatchToProps will decide what action gets dispatched