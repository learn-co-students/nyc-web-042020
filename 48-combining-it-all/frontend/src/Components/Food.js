import React from 'react'

class Food extends React.Component{
    render(){
        return(
            <li>
                <p>Food Name: {this.props.food.name}</p>
                <p>Flavor Profile: {this.props.food.flavorProfile}</p>
                
            </li>
        )
    }
}

export default Food