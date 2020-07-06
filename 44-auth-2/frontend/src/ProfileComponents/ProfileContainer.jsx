import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    let arrayofSnacks = this.props.user.snacks.map((snackObj) => {
      return <Snack key={snackObj.id} snack={snackObj} />
    })
    return (
      <div>
        <h2>{this.props.user.username}&apos;s Profile</h2>
        <ol>
          {arrayofSnacks}
        </ol>

        <NewSnackForm token={this.props.token} addOneSnack={this.props.addOneSnack}/>

      </div>
    );
  }

}

export default ProfileContainer;
