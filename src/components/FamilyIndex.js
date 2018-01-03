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
            familyMembers: response
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

export default FamilyIndex;
