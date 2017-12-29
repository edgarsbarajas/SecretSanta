import React, { Component } from 'react'
import '../css/startform.css'

class StartForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      nameInputs: ["", "", ""]
    }
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("submitted :)")
  }

  handleChange(event, inputNumber){
    let inputs = this.state.nameInputs
    inputs[inputNumber] = event.target.value
    console.log(event.target.value, inputNumber)
    this.setState({
      nameInputs: inputs
    })
  }

  renderInputs(){
    return this.state.nameInputs.map((name, index) => {
      return(
        <div className='person-details' key={index}>
          <input type='text'
            name='name'
            placeholder='Name'
            value={this.state.nameInputs[index]}
            onChange={event => {this.handleChange(event, index)}}/>
        </div>
      )
    })
  }

  renderForm(){
    return(
      <form onSubmit={(event) => {this.handleSubmit(event)}}>
        { this.renderInputs() }
        <input type='submit' value='Begin!' />
      </form>
    )
  }

  addPersonInput(){
    let inputs = this.state.nameInputs
    inputs.push("")

    this.setState({
      nameInputs: inputs
    })
  }

  render(){
    return(
      <div className='start-form'>
        { this.renderForm() }
        <button onClick={() => {this.addPersonInput()}}>
          +
        </button>
      </div>
    )
  }
}

export default StartForm;