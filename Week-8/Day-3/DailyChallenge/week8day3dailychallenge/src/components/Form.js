import React from 'react'


class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            nuts: '',
            dairy: ''
        }
    }

    sendToShow = (e) => {
        e.preventDefault()
        this.props.pine(this.state)
    } 
    // to send data backwards we need to give the name of where we are sending the location back to
    // in this case we say data


    update = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }



    render(){
        return(
            <>
            <h1>Input Data</h1>
            <form onSubmit={this.sendToShow}>
                <input type='text' name='firstName' placeholder='Name' onChange={this.update} />
                <input type='text' name='lastName' placeholder='Last Name' onChange={this.update} />
                <input type='text' name='age' placeholder='Age' onChange={this.update} />

                <label>Male<input type="radio" name="gender" value="male" /></label>
                <label>Female<input type="radio" name="gender" value="female" /></label>


                <select>
                    <option value="china">China</option>
                    <option value="brazil">Brazil</option>
                    <option value="brazil">Taiwan</option>
                </select>

                <input type="checkbox"  name="nuts" value="nuts"/>
                <label for="vehicle1">Nuts</label><br/>
                <input type="checkbox"  name="dairy" value="dairy"/>
                <label for="vehicle2">Dairy</label><br/>

                <input type="submit" value="Submit"/>
            </form>
            
            </>
        )
    }
}

export default Form

  