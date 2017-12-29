import React, { Component } from 'react'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

// Media query the width of the img in the zoom
// it is good for mobile

class LandingVideo extends Component {
  playVideo(e){
    console.log(e.target)
    e.target.play()
  }

  render(){
    return(
      <div className="landing-video" style={{overflow: 'hidden'}}>
        <video onClick={(e) => {this.playVideo(e)}}
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