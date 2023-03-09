import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: props.list
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      this.setState({current: this.props.list })
    }
  }

  delete = (e) => {
    e.preventDefault()
    const deleteId = e.target.id
    this.state.current.splice(deleteId, 1)
    this.setState({current: this.state.current})
    this.props.return(deleteId)
  }

  render() {
    return (
      <>
        {this.state.current.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item}</h1>
              <button id={index} onClick={this.delete}>Remove</button>
            </div>
          )
        })}
      </>
    )
  }

}

export default List
