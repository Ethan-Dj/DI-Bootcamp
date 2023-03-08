import { ErrorResponse } from '@remix-run/router'
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error, errInfo){
        console.log('error=>', error)
        console.log('errorinfo=>', errInfo)
        this.setState({
            error:error,
            errorInfo: errInfo
        })
    }


    render(){
        if (this.state.error){
            return (
                <div>
                    Something Went Wrong
                </div>
            )
        }
        return(
            this.props.children 
            // we wrapped counter in errorboundary 
            // we say if no error, go to the child elem
            // this is the counter in this case
        )
    }
}

// whatever disappears & replaced is whatever is in the 
// error boundary

export default ErrorBoundary