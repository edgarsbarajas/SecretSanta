import React from 'react'
import animateScrollTo from 'animated-scroll-to';

const StartButton = () => {
  return(
    <button
      className="button animated bounceInDown"
      style={{width: '100%', height: '50px', background: 'green', marginTop: '-4px', padding: '0', border: 'none', color: 'white'}}
      onClick={() => {handleClick()}}>
      START
    </button>
  )
}

const handleClick = () => {
  animateScrollTo(0);

  document.getElementsByClassName('people-form')[0].style.display = 'flex'
  document.getElementById('logo').style.display = 'none'

}

export default StartButton;
