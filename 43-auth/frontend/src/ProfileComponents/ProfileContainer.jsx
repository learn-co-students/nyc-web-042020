import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>{"USERNAME"}&apos;s Profile</h2>
        <ol>
          {"RENDER SNACKS"}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}

export default ProfileContainer;
