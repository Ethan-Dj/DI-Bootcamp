import React from 'react'

class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current: props.list
        }
    }
    
    handleValues = (e) => {
        e.preventDefault()
        this.props.data(e.target.item.value)
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleValues}>
            <input type="text" name="item"/>
            <input type="submit" value="submit" />
            </form>
            </>
        )
    }
}

export default AddItem