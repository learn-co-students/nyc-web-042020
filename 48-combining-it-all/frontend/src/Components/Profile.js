import React from 'react'

import {connect} from 'react-redux'

const Profile = (props) => {

    let handleDelete = (user_food) => {

        fetch(`http://localhost:4000/user_foods/${user_food.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": props.token
            }
        })
        .then(r => r.json())
        .then((delFood) => {
            props.deleteOneFood(delFood.id)
        })

    }

    return(
        <div>
            <h2>{props.username}'s Profile</h2>

            <ul>
                {props.user_foods.map((user_food) => {
                    return <li onClick={(e) => {handleDelete(user_food)}} key={user_food.id}>{user_food.food.name}</li>
                })}
            </ul>

        </div>
    )
}


// SET INFO FROM GLOBAL STATE

let deleteOneFood = (id) => {
    return {
        type: "DELETE_ONE_FOOD",
        payload: id
    }
}

let mapDispatchToProps = {
    deleteOneFood: deleteOneFood
}

// GET INFO FROM GLOBAL STATE
let mapStateToProps = (globalState) => {
    return {
        username: globalState.userInformation.username,
        user_foods: globalState.userInformation.user_foods,
        token: globalState.userInformation.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)