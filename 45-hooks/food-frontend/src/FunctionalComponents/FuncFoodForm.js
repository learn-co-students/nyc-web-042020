import React, {useState} from 'react'

let FuncFoodForm = () => {
    let [foodName, setFoodName] = useState("Papaya")
    let [foodType, setFoodType] = useState("Fruit")
    
    // let [stateObj, setStateObj] = useState({
    //     foodName: "Pineapple",
    //     foodType: "Fruit"
    // })
    // console.log(foodType)

    // let handleInputs = (evt) => {
    //     setStateObj(
    //         {   
    //             ...stateObj, 
    //             [evt.target.name]: evt.target.value
    //         }
    //     )
    // }

    // console.log("STATE OF FORM:", stateObj)


    let handleSubmit = (evt) => {
        evt.preventDefault()
        // fetch("http://localhost:3000/foods", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify()
        // })
    }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="f_name">Name</label>
        <input
          type="text"
          name="foodName"
          id="f_name"
          autoComplete="off"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <label htmlFor="f_type">Type</label>
        <input
          type="text"
          name="foodType"
          id="f_type"
          autoComplete="off"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />
        <input type="submit" value="Log a New Food" />
      </form>
    )
}

export default FuncFoodForm