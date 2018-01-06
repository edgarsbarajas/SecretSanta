import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PersonDetails from './PersonDetails'

class FamilyIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      familyId: props.match.params.family_id,
      familyMembers: []
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

  renderFamilyList(){
    return(
      <div className='family'>
        { this.state.familyMembers.map(person => {
          return(
            <PersonDetails
              key={person.id}
              person={person}
              giftee={this.state.familyMembers.find(giftee => { return giftee.id === person.giftee_id})}
            />
          )
        })}
      </div>
    )
  }

  render(){
    return(
      <div>
        { this.renderFamilyList() }
      </div>
    )
  }
}

export default FamilyIndex;
