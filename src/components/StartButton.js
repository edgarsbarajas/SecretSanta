import React from 'react'

const StartButton = () => {
  return(
    <button
      className="button"
      style={{width: '100%', height: '50px', background: 'green', marginTop: '-4px', padding: '0', border: 'none', color: 'white'}}
      onClick={() => {window.scrollTo(0, 0)}}>
      START
    </button>
  )
}

export default StartButton;