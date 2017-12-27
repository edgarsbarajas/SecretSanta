import React, { Component } from 'react'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

// Media query the width of the img in the zoom
// it is good for mobile

class Home extends Component {
  render(){
    return(
      <div className="home" style={{}}>
        <video autoPlay muted loop style={{position: 'fixed', minHeight: '100vh', minWidth: '100vw'}}>
          <source src='/videos/Christmas.mp4' type='video/mp4' />
        </video>
        <Zoom delay={1000} duration={2000} className="content" style={{width: '100%', color: 'white', position: 'fixed', top: '30%', textAlign: 'center'}}>
          <img src='/photos/logo.png' style={{width: '50%'}}/>
        </Zoom>
      </div>
    )
  }
}

export default Home;