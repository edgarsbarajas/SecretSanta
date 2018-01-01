import React, { Component } from 'react'
import { bounceInDown, bounceInUp, lightSpeedIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import axios from 'axios'

class StartForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      nameInputs: ["", "", ""],
      phoneInputs: ["", "", ""]
    }
  }

  handleSubmit(event){
    event.preventDefault()

    // send to backend
    axios.post('http://localhost:3000/people', {
      names: this.state.nameInputs,
      phoneNumbers: this.state.phoneInputs
    })
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  handleNameChange(event, inputNumber){
    let inputs = this.state.nameInputs
    inputs[inputNumber] = event.target.value
    console.log(event.target.value, inputNumber)
    this.setState({
      nameInputs: inputs
    })
  }

  handlePhoneChange(event, inputNumber){
    let inputs = this.state.phoneInputs
    inputs[inputNumber] = event.target.value
    console.log(event.target.value, inputNumber)
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
          <input type='text'
            display= 'inline-block'
            name='name'
            placeholder='Name'
            value={this.state.nameInputs[index]}
            onChange={event => {this.handleNameChange(event, index)}}
            style={styles.personDetailsInput}/>
          <input type='text'
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
        { this.renderInputs() }
        <button
          onClick={() => {this.addPersonInput()}}
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

  addPersonInput(){
    let nameInputs = this.state.nameInputs
    let phoneInputs = this.state.phoneInputs
    nameInputs.push("")
    phoneInputs.push("")

    this.setState({
      nameInputs: nameInputs,
      phoneInputs: phoneInputs
    })
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
  }
}

export default StartForm;
