import React from 'react'
import './Testmonial.scss'

const Testmonial = () => {
  return (
    <div className='testmonial' id='testmonial'>
      <h1>Testmonial</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" alt=""  className='left'/>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className='user'/>
             <img src="assets/youtube.png" alt="" className='right'/>
          </div>
          <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloremque! Lorem ipsum dolor sit amet.</div>
          <div className="bottom">
            <h3>Alex</h3>
            <h4>Ceo of Lam dev</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testmonial