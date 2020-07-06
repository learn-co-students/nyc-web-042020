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
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
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
    return <ProfileContainer />
  }


  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile">
            <ProfileContainer/>
          </Route>
          <Route path="/" exact component={Home}/>
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

let MagicalComponent = withRouter(App)
export default MagicalComponent















