import React, { Component } from 'react'
import axios from 'axios'

class PersonDetails extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      passwordInput: "",
      hiddenPasswordEntry: true,
      revealedGiftee: false,
      secondaryColor: 'rgb(207,181,59)',
      giftIdeas: ['', '', '']
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
        revealedGiftee: true,
        secondaryColor: 'rgb(207,181,59)'
      })

      this.props.clearHeader()
      event.target.previousElementSibling.innerHTML += `,</br>you got ${this.props.giftee.name}!`

      // get the other people on the list to clear them
      const DOMpeople = this.getSiblings(event.target.parentNode)
      console.log('YOYOYOYO', DOMpeople)
      for(var i = 0; i < DOMpeople.length; i++){
        DOMpeople[i].style.display = 'none'
      }
    } else {
      this.setState({ secondaryColor: 'red'})
    }
  }

  handleChange(event){
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleGiftChange(event, key){
    let giftIdeas = this.state.giftIdeas
    giftIdeas[key] = event.target.value

    this.setState({
      giftIdeas: giftIdeas
    })
  }

  handleGiftIdeaSubmit(event){
    event.preventDefault()
    console.log('submitted breh');

    axios.put(`http://localhost:3000/people/${this.props.person.id}`, {
      giftIdeas: this.state.giftIdeas
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
  }

  revealPersonGiftIdeasForm(){
    if(this.state.revealedGiftee === true){
      if(this.props.person.gift_ideas.length < 1){
        return(
          <div>
            <h4 style={styles.message}>
              WAIT!<br/>
              Before you go, list some gift items that you might want.
            </h4>
            <form style={styles.form} onSubmit={(e) => {this.handleGiftIdeaSubmit(e)}}>
              { this.state.giftIdeas.map((gift, index) => {
                return(
                  <input
                    key={index}
                    value={gift}
                    type='text'
                    onChange={(e) => {this.handleGiftChange(e, index)}}
                    style={Object.assign({}, styles.passwordInput, {borderColor: 'rgb(207,181,59)', width: '200px', margin: '3px 0'})}
                    />
                )
              })}
              <input type='submit' style={styles.submitButton}/>
            </form>
          </div>
        )
      }
    }
  }

  revealGifteeGiftIdeas(){
    if(this.state.revealedGiftee === true){
      if(this.props.giftee.gift_ideas.length > 0){
        return (
          <div className='giftee gift-ideas'>
            { this.props.giftee.name } has a few gift suggestions:
            { this.props.giftee.gift_ideas.map((idea, index) => {
              return(
                <div>{`${index+1}. ${idea}`}</div>
              )
            })}
          </div>
        )
      } else {
        return(
          <div>{ this.props.giftee.name } has not suggested anything yet. Come back later to see if their list has been updated.</div>
        )
      }
    }
  }

  render(){
    return(
      <div className='person' style={styles.person}>
        <div
          className='person-name'
          onClick={() => {this.handleClick()}}
          style={this.state.revealedGiftee === true ? Object.assign({}, styles.personName, {color: this.state.secondaryColor}) : {}}>
          {this.props.person.name}
        </div>
        { this.revealGifteeGiftIdeas() }
        { this.revealPersonGiftIdeasForm() }
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input
            placeholder='password'
            value={this.state.passwordInput}
            type={this.state.hiddenPasswordEntry === true ? 'hidden' : 'text'}
            onChange={(event) => {this.handleChange(event)}}
            style={Object.assign({}, styles.passwordInput, {borderColor: this.state.secondaryColor})} />
        </form>
      </div>
    )
  }
}

console.log(PersonDetails)

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
    borderColor: 'black',
    fontSize: '15px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'black',
    color: 'rgb(207,181,59)'
  },
  personName: {
    width: '100vw',
    padding: '10px 0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  message: {
    color: 'red',
    marginBottom: '-3px'
  },
  submitButton: {
    width: '70px',
    height: '30px',
    borderRadius: '25px',
    backgroundColor: 'rgb(207,181,59)',
    marginTop: '5px'
  }
}

export default PersonDetails;
