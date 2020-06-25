import React from 'react'

function FoodHeader(props){

  let handleType = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }

  return(
    <nav>
      <h1>Welcome to the Flatiron Food Bazaar</h1>
      <div className="searchBar">

        <input 
          type="text" 
          value={props.searchTerm}
          onChange={handleType}
        />

      </div>
    </nav>
  )
}

export default FoodHeader
