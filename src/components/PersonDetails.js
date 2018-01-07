import React, { Component } from 'react'
import axios from 'axios'

class PersonDetails extends Component{

  constructor(props){
    super(props);
    console.log(secondaryColor);

    this.state = {
      person: props.person,
      giftee: props.giftee,
      passwordInput: "",
      hiddenPasswordEntry: true,
      revealedGiftee: false
    }
  }

  handleClick(){
    this.setState({
      hiddenPasswordEntry: this.state.hiddenPasswordEntry === true ? false : true
    })
  }

  // renderGiftee(){}

  handleSubmit(event){
    event.preventDefault()
    if(this.state.passwordInput === this.state.person.password){
      // if password is correct, append the giftee's name
      this.setState({
        hiddenPasswordEntry: true,
        revealedGiftee: true
      })
      console.log(event.target.previousElementSibling)
      event.target.previousElementSibling.innerHTML += `,<br/>you got ${this.state.giftee.name}!`


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
      <div style={styles.person}>
        <div
          className='person-name'
          onClick={() => {this.handleClick()}}
          style={this.state.revealedGiftee === true ? styles.personName : {}}>
          {this.state.person.name}
        </div>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input
            value={this.state.passwordInput}
            type={this.state.hiddenPasswordEntry === true ? 'hidden' : 'text'}
            onChange={(event) => {this.handleChange(event)}}
            style={styles.passwordInput} />
        </form>
      </div>
    )
  }
}

const secondaryColor = 'rgb(207,181,59)'

const styles = {
  person: {
    textAlign: 'center',
    fontSize: '28px',
    margin: '5px 0'
  },
  passwordInput: {
    width: '40%',
    height: '30px',
    borderRadius: '25px',
    borderColor: secondaryColor,
    fontSize: '15px',
    textIndent: '10px',
  },
  personName: {
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100vw',
    padding: '10px 0',
    color: secondaryColor
  }
}

export default PersonDetails;
