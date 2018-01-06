import React, { Component } from 'react'
import axios from 'axios'

class PersonDetails extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      person: props.person,
      hiddenPasswordEntry: true
    }
    console.log(this.state)
  }

  handleClick(){
    this.setState({
      hiddenPasswordEntry: false
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('hello')
  }

  render(){
    return(
      <div onClick={() => {this.handleClick()}}>
        {this.state.person.name}
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input type={this.state.hiddenPasswordEntry === true ? 'hidden' : 'text'} />
        </form>
      </div>
    )
  }

}

export default PersonDetails;
