import React, { Component } from 'react'
import axios from 'axios'

class PersonDetails extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      passwordInput: "",
      hiddenPasswordEntry: true,
      revealedGiftee: false
    }
  }

  handleClick(){
    this.setState({
      hiddenPasswordEntry: this.state.hiddenPasswordEntry === true && this.state.revealedGiftee === false ? false : true
    })
  }

  getSiblings(elem){
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for ( ; sibling; sibling = sibling.nextSibling )
       if ( sibling.nodeType == 1 && sibling != elem )
          siblings.push( sibling );
    return siblings;
}

  handleSubmit(event){
    event.preventDefault()
    if(this.state.passwordInput === this.props.person.password){
      // if password is correct, append the giftee's name
      this.setState({
        hiddenPasswordEntry: true,
        revealedGiftee: true
      })

      this.props.clearHeader()
      event.target.previousElementSibling.innerHTML += `,<br/>you got ${this.props.giftee.name}!`


      // get the other people on the list to clear them
      const DOMpeople = this.getSiblings(event.target.parentNode)

      for(var i = 0; i < DOMpeople.length; i++){
        DOMpeople[i].style.display = 'none'
      }

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
      <div className='person' style={styles.person}>
        <div
          className='person-name'
          onClick={() => {this.handleClick()}}
          style={this.state.revealedGiftee === true ? styles.personName : {}}>
          {this.props.person.name}
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
    width: '80px',
    height: '30px',
    borderRadius: '25px',
    borderColor: secondaryColor,
    fontSize: '15px',
    textIndent: '10px',
  },
  personName: {
    width: '100vw',
    padding: '10px 0',
    color: secondaryColor
  }
}

export default PersonDetails;
