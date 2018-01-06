import React, { Component } from 'react'
import axios from 'axios'

class PersonDetails extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      person: props.person,
      giftee: props.giftee,
      passwordInput: "",
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
    if(this.state.passwordInput === this.state.person.password){
      // if password is correct, append the giftee's name
      event.target.closest('div').innerHTML += `<div className='giftee'>You got ${this.state.giftee.name}!</div>`

    } else {
      console.log("WRONG!")
    }
  }

  handleChange(event){
    this.setState({
      passwordInput: event.target.value
    })
  }

  render(){
    return(
      <div onClick={() => {this.handleClick()}}>
        {this.state.person.name}
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input
            value={this.state.passwordInput}
            type={this.state.hiddenPasswordEntry === true ? 'hidden' : 'text'}
            onChange={(event) => {this.handleChange(event)}} />
        </form>
      </div>
    )
  }

}

export default PersonDetails;
