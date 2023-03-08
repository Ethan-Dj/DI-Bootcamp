import React from "react";
import { ErrorResponse } from '@remix-run/router'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState({error: error, errorInfo: errorInfo})
        // the error: set the error state to the error, which is true when called
    }

    render(){
        if (this.state.error == true){
            return(
                <>
                <p>Problem!</p>
                </>
            )
        }
        return(
            this.props.children
        )
    }
}

export default ErrorBoundary

