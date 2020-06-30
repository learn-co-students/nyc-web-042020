import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let arrayOfComponents = props.wizards.map((wizardPojo) => {
    return <Wizard key={wizardPojo.id} wizard={wizardPojo} deleteWizard={props.deleteWizard}/>
  })


  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {arrayOfComponents}
      </ul>
    </section>
  )
}

export default GreatHall;
