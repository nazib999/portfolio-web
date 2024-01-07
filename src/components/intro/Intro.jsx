import React from 'react'
import './Intro.scss'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
        <div className="left">
            <div className="imgContainer">
                <img src="assets/man.png" alt="" />
            </div>

        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Safak kolan</h1>
                <h3>Freelancer <span></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Intro