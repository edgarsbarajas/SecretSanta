import React, { Component } from 'react'
import { bounceInDown, bounceInUp, lightSpeedIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import axios from 'axios'
import { Link } from 'react-router-dom'

class StartForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      nameInputs: ["", "", ""],
      phoneInputs: ["", "", ""],
      errorMessage: "",
      done: false
    }
  }

  makeInputsRed(inputs, indexes){
    for(var i = 0; i < indexes.length; i++){
      inputs[indexes[i]].style.borderColor = 'red'
    }
  }

  getEmptyStringIndexes(array){
    let emptyStringIndexes = []

    for(var i = 0; i < array.length; i++){
      if(array[i] === ""){
        emptyStringIndexes.push(i);
      }
    }

    return emptyStringIndexes
  }

  resetInputsToGold(inputs){
    for(var i = 0; i < inputs.length; i++){
      inputs[i].style.borderColor = secondaryColor;
    }
  }

  setInputsToGreen(inputs){
    for(var i = 0; i < inputs.length; i++){
      inputs[i].style.borderColor = 'green';
    }
  }

  handleSubmit(event){
    event.preventDefault()

    const nameFormInputs = document.getElementsByClassName('name-input')
    const phoneFormInputs = document.getElementsByClassName('phone-input')

    if(this.state.nameInputs.includes("") || this.state.phoneInputs.includes("")){
      this.setState({
        errorMessage: "The phone or name cannot be blank."
      })

      const nameFormInputs = document.getElementsByClassName('name-input')
      const phoneFormInputs = document.getElementsByClassName('phone-input')

      // make the input borders gold again
      // they might be red if resubmitting form for the second time
      this.resetInputsToGold(nameFormInputs)
      this.resetInputsToGold(phoneFormInputs)

      // check the name and phone inputs for empty strings
      // get the index of the empty string and apply it to the input on the dom
      // make the border red
      const nameEmptyIndexes = this.getEmptyStringIndexes(this.state.nameInputs)
      this.makeInputsRed(nameFormInputs, nameEmptyIndexes)

      const phoneEmptyIndexes = this.getEmptyStringIndexes(this.state.phoneInputs)
      this.makeInputsRed(phoneFormInputs, phoneEmptyIndexes)
    } else {
      // send to backend
      axios.post('http://localhost:3000/people', {
        names: this.state.nameInputs,
        phoneNumbers: this.state.phoneInputs
      })
        .then((response) => {
          console.log(response);
          this.setState({ done: true, errorMessage: 'Great! Everyone has been text messaged a password to reveal their secret santa!' })

          this.setInputsToGreen(nameFormInputs)
          this.setInputsToGreen(phoneFormInputs)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  handleNameChange(event, inputNumber){
    let inputs = this.state.nameInputs
    inputs[inputNumber] = event.target.value

    this.setState({
      nameInputs: inputs
    })
  }

  handlePhoneChange(event, inputNumber){
    let inputs = this.state.phoneInputs
    inputs[inputNumber] = event.target.value

    this.setState({
      phoneInputs: inputs
    })
  }

  renderInputs(){
    return this.state.nameInputs.map((name, index) => {
      return(
        <div className='person-details'
          key={index}
          style={styles.personDetailsWrapper}>
          <input
            className='name-input'
            type='text'
            display= 'inline-block'
            name='name'
            placeholder='Name'
            value={this.state.nameInputs[index]}
            onChange={event => {this.handleNameChange(event, index)}}
            style={styles.personDetailsInput}/>
          <input
            className='phone-input'
            type='text'
            display='inline-block'
            name='phone-number'
            placeholder='Phone Number'
            value={this.state.phoneInputs[index]}
            onChange={event => {this.handlePhoneChange(event, index)}}
            style={styles.personDetailsInput}/>
        </div>
      )
    })
  }

  renderForm(){
    return(
      <form
        onSubmit={(event) => {this.handleSubmit(event)}}
        style={styles.formWrapper}
        className='people-form'>
        <img src='/photos/logo.png' style={styles.logo}/>
        { this.renderErrors() }
        { this.renderInputs() }
        <button
          onClick={(e) => {this.addPersonInput(e)}}
          className='add-input-button animated rubberBand'
          style={styles.plusButton}>
          +
        </button>
        <input
          type='submit'
          value='Begin!'
          style={styles.submitButton}/>
      </form>
    )
  }

  addPersonInput(event){
    event.preventDefault()

    let nameInputs = this.state.nameInputs
    let phoneInputs = this.state.phoneInputs
    nameInputs.push("")
    phoneInputs.push("")

    this.setState({
      nameInputs: nameInputs,
      phoneInputs: phoneInputs
    })
  }

  renderErrors(){
    if(this.state.done){
      return(
        <div className="message" style={styles.doneMessage}>
          { this.state.errorMessage }
          <br/>
          <Link to='/family/13' style={styles.a}>Click here to continue</Link>
        </div>
      )
    } else{
      return(
        <div className="errors" style={styles.errors}>
          { this.state.errorMessage }
        </div>
      )
    }
  }

  render(){
    return(
      <StyleRoot>
        { this.renderForm() }
      </StyleRoot>
    )
  }
}

const secondaryColor = 'rgb(207,181,59)'

const styles = {
  formWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: '3',
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center'
  },
  personDetailsWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '15px 0'
  },
  personDetailsInput: {
    backgroundColor: 'black',
    width: '40%',
    height: '30px',
    borderRadius: '25px',
    borderColor: secondaryColor,
    color: secondaryColor,
    fontSize: '15px',
    textIndent: '10px',
    animation: 'x 1.5s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  submitButton: {
    backgroundColor: secondaryColor,
    width: '70px',
    height: '30px',
    borderRadius: '25px',
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  },
  plusButton: {
    background: 'none',
    marginBottom: '10px',
    fontSize: '25px',
    color: secondaryColor,
    border: 'none'
  },
  logo: {
    width: '115px',
    marginTop: '12px',
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  },
  errors: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center'
  },
  doneMessage: {
    color: 'green',
    marginTop: '10px',
    textAlign: 'center'
  },
  a: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'green'
  }
}

export default StartForm;
