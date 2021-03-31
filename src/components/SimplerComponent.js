// Code SimplerComponent Here
import React, { Component } from 'react'

export class SimplerComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
    mood: this.props.mood
  }
}


  render() {
    return (
      <div>
        <h2>Hello{this.state.mood}</h2>
        
      </div>
    )
  }
}

export default SimplerComponent
