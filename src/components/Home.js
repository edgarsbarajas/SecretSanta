import React, { Component } from 'react'
import LandingVideo from './LandingVideo'
import StartButton from './StartButton'
import StartForm from './StartForm'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <StartForm/>
        <LandingVideo/>
        <StartButton/>
      </div>
    )
  }
}

export default Home;