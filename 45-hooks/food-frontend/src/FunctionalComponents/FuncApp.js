import React, {useState, useEffect} from 'react'
import FoodContainer from '../OriginalComponents/FoodContainer'
import FoodHeader from '../OriginalComponents/FoodHeader'
import FuncFoodForm from './FuncFoodForm'

let App = () => {
    let [foods, setFoods] = useState([])
    let [searchTerm, setSearchTerm] = useState("")

    console.log("FOODS:",foods)
    // console.log("SEARCH TERM:", searchTerm)

    // useEffect(() => {}, []) -> componentDidMount
    // useEffect(() => {}, [a,b]) -> Any time that a or b changes, the callback gets invoked (componentDidUpdate)
    // useEffect(() => {
        // return () => {
            //  console.log("THIS COMPONENT WILL BE UNMOUNTED")
        // }
    // }, []) -> componentWillUnmount

    useEffect(() => {
        fetch("http://localhost:3000/foods")
            .then(r => r.json())
            .then((arrayOfFoods) => {
                setFoods(arrayOfFoods)
            })
    }, [])

    useEffect(() => {
        console.log("The foods array has changed!")
    }, [foods])

    let handleAddChicken = (evt) => {
        let copyOfFoods = [...foods, "chicken"]
        setFoods(copyOfFoods)
        // setFoods((prevFoods) => {return [...prevFoods, "Chicken"]})
        // console.log("IMMEDIATELY AFTER", foods)
    }

    return (
        <div className="App">
            <button onClick={handleAddChicken}>Click to add Chicken</button>
            <FoodHeader
                changeSearchTerm={() => {}}
            />
            <FuncFoodForm
            />
            <FoodContainer
                foods={foods}
            />
        </div>
    )
}

export default App