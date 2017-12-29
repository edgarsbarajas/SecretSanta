import React, { Component } from 'react'
import '../css/startform.css'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

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
        <div className='person-details' key={index} style={styles.personDetailsWrapper}>
          <input type='text'
            className="animated bounceInDown"
            name='name'
            placeholder='Name'
            value={this.state.nameInputs[index]}
            onChange={event => {this.handleNameChange(event, index)}}
            style={styles.personDetailsInput}/>
          <input type='text'
            className="animated bounceInDown"
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
      <form onSubmit={(event) => {this.handleSubmit(event)}}
        style={styles.formWrapper}
        className='people-form'>
        { this.renderInputs() }
        <button onClick={() => {this.addPersonInput()}}>
          +
        </button>
        <input type='submit' value='Begin!' />
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

const styles = {
  formWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: '3',
    display: 'none',
    flexDirection: 'column'
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
    color: 'yellow',
    fontSize: '15px',
    textIndent: '10px'
  }
}

export default StartForm;