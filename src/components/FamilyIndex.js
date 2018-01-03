import React, { Component } from 'react'
import axios from 'axios'

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
    console.log('got here')
    console.log(this.state.familyMembers.length)
    return(
      <div className='family'>
        { this.state.familyMembers.map(person => {
          return(
            <div className='person' key={person.id}>
              { person.name }
            </div>
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
