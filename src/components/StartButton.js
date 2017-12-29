import React from 'react'
import animateScrollTo from 'animated-scroll-to';

const StartButton = () => {
  return(
    <button
      className="button"
      style={{width: '100%', height: '50px', background: 'green', marginTop: '-4px', padding: '0', border: 'none', color: 'white'}}
      onClick={() => {animateScrollTo(0);}}>
      START
    </button>
  )
}

export default StartButton;