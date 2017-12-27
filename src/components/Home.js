import React, { Component } from 'react'
import LandingVideo from './LandingVideo'
import StartButton from './StartButton'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <LandingVideo/>
        <StartButton/>
      </div>
    )
  }
}

export default Home;