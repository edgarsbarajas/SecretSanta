import React, { Component } from 'react'
import { bounceInDown } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

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
    console.log("submitted :)")
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
        <StyleRoot className='person-details'
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
        </StyleRoot>
      )
    })
  }

  renderForm(){
    return(
      <form onSubmit={(event) => {this.handleSubmit(event)}}
        style={styles.formWrapper}
        className='people-form'>
        { this.renderInputs() }
        <button onClick={() => {this.addPersonInput()}}
          className='add-input-button animated rubberBand'
          style={styles.plusButton}>
          +
        </button>
        <input type='submit'
          value='Begin!'
          style={styles.submitButton}
          className='animated bounceInUp'/>
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
      <div>
        { this.renderForm() }
      </div>
    )
  }
}

const secondaryColor = 'rgb(207,181,59)'

const styles = {
  formWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  submitButton: {
    backgroundColor: secondaryColor,
    width: '70px',
    height: '30px',
    borderRadius: '25px'
  },
  plusButton: {
    background: 'none',
    marginBottom: '10px',
    fontSize: '25px',
    color: secondaryColor,
    border: 'none'
  },
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

export default StartForm;
