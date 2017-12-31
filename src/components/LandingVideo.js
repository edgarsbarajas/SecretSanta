import React, { Component } from 'react'
import { Zoom } from 'react-reveal';
import { tada } from 'react-animations'
import Radium, {StyleRoot} from 'radium'

// Media query the width of the img in the zoom
// it is good for mobile

class LandingVideo extends Component {
  componentDidMount(){
    document.getElementById('landing-video').play()
  }

  render(){
    return(
      <StyleRoot className="landing-video" style={{overflow: 'hidden'}}>
        <video
          id='landing-video'
          muted
          loop
          playsInline
          style={{minHeight: '100vh', minWidth: '100vw'}}>
          <source src='/videos/Christmas.mp4' type='video/mp4' />
        </video>
        <div
          style={styles.logo}
          id='logo'>
          <img src='/photos/logo.png' style={{width: '50%'}}/>
        </div>
      </StyleRoot>
    )
  }
}

const styles = {
  logo: {
    width: '100%',
    color: 'white',
    position: 'absolute',
    top: '30%',
    textAlign: 'center',
    animation: 'x 3s',
    animationName: Radium.keyframes(tada, 'tada')
  }
}

export default LandingVideo;
