import React from 'react'

class FoodForm extends React.Component{
    
    state={
        name: "",
        flavorProfile: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        let {name, flavorProfile} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} name="name" onChange={this.handleChange} id="name" autoComplete="off" />
                <br/>
                <label htmlFor="profile">Flavor Profile:</label>
                <input type="text" value={flavorProfile} name="flavorProfile" onChange={this.handleChange} id="profile" autoComplete="off" />
                <br/>
                <input type="Submit" value={"Dispatch this snack"} />
            </form>
        )
        
    }
}

export default FoodForm