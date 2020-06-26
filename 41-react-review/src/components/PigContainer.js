import React from 'react'
import PigCard from './PigCard'

let PigContainer = (propz) => {


  let arrayOfComps = propz.piggies.map((pig) => {
    return <PigCard
      key={pig.name}
      pig={pig}
    />
  })


  return(
    <div>
      <h2>Welcome to the Pig Sty</h2>
      <ul>
        {
          arrayOfComps
        }
      </ul>
    </div>
  )
  
}

export default PigContainer
