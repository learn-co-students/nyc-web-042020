import React from 'react';
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import {Switch, Route} from 'react-router-dom'
// Switch, Route are components

import {withRouter} from 'react-router-dom'
// withRouter is a function that can take in a Components
// Return a Component

class App extends React.Component {

  state = {
    user: {
      id: 0,
      username: "",
      snacks: []
    },
    token: ""
  }

  componentDidMount(){
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
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(resp.error)
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


  addOneSnack = (snack) => {
    let copyOfSnacks = [...this.state.user.snacks, snack]
    let copyOfUser = {
      ...this.state.user, 
      snacks: copyOfSnacks
    }
    this.setState({
      user: copyOfUser
    })
  }

  renderProfile = (routerProps) => {
    if(this.state.token){
      return <ProfileContainer user={this.state.user} token={this.state.token} addOneSnack={this.addOneSnack}/>
    } else {
      this.props.history.push("/login")
    }
  }


  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={this.renderProfile}></Route>
          <Route path="/" exact component={Home}/>
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

let MagicalComponent = withRouter(App)
export default MagicalComponent















