import React from 'react'
import {ErrorResponse} from '@remix-run/router'

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({error:error, errorInfo:errorInfo})
    }

    render(){
        if (this.state.error){
            return(
                <>
                <h1>There is an error</h1>
                </>
            )
        }


        return(
            <>
            {this.props.children}
          </>
        )
    }
}

export default ErrorBoundary