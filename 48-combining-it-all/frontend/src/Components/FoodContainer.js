import React from 'react'
import Food from './Food'
import {connect} from 'react-redux'

let FoodContainer = (props) => {
    let arrayOfComponents = props.foods.map((foodPojo) => {
        return <Food key={foodPojo.id} food={foodPojo} />
    })
    return(
        <>
            <h3>Foods we are selling:</h3>
            <ol>
                {arrayOfComponents}
            </ol>
        </>
    )

}


// The return value of mapStateToProps(READ) needs to be a POJO
    // The POJO will be merged into the component's props
let mapStateToProps = (globalState) => {
    console.log("FROM INSIDE MAPSTATETOPROPS", globalState)
    return {
        foods: globalState.foodInformation.foods
    }
}


let magicalFunc = connect(mapStateToProps)
let magicalComponent = magicalFunc(FoodContainer)
export default magicalComponent

// export default connect(FoodContainer)(mapStateToProps)
// the second set of () is always the Component 