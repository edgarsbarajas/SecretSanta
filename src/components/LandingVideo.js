import React, { Component } from 'react'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

// Media query the width of the img in the zoom
// it is good for mobile

class LandingVideo extends Component {
  componentDidMount(){
    document.getElementById('landing-video').play()
  }

  render(){
    return(
      <div className="landing-video" style={{overflow: 'hidden'}}>
        <video
          id='landing-video'
          muted
          loop
          controls='true'
          style={{minHeight: '100vh', minWidth: '100vw'}}>
          <source src='/videos/Christmas.mp4' type='video/mp4' />
        </video>
        <Zoom delay={1000} duration={2000} className="content" style={{width: '100%', color: 'white', position: 'absolute', top: '30%', textAlign: 'center'}}>
          <img src='/photos/logo.png' style={{width: '50%'}}/>
        </Zoom>
      </div>
    )
  }
}

export default LandingVideo;