import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PersonDetails from './PersonDetails'

class FamilyIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      familyId: props.match.params.family_id,
      familyMembers: [],
      header: 'Who are you?'
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/family/${this.state.familyId}`)
      .then((response) => {
          this.setState({
            familyMembers: response.data
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  clearHeader(){
    this.setState({
      header: ''
    })
  }

  render(){
    return(
      <div className='family-wrapper' style={styles.family}>
        <div className='logo-wrapper' style={styles.logoWrapper}>
          <img src='/photos/logo.png' style={styles.logo}/>
        </div>
        <h1>{`${this.state.header}`}</h1>
        <div className='family'>
          { this.state.familyMembers.map(person => {
            return(
              <PersonDetails
                key={person.id}
                person={person}
                giftee={this.state.familyMembers.find(giftee => { return giftee.id === person.giftee_id})}
                clearHeader={() => {this.clearHeader()}}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const styles = {
  family: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px black',
    background: 'url(/photos/background.png)',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
  },
  logoWrapper: {
    padding: '10px 0',
    textAlign: 'center',
    background: 'rgba(0,0,0,0.5)',
    width: '100vw'
  },
  logo: {
    width: '120px'
  }
}

export default FamilyIndex;
