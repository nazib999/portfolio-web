import React from 'react'
import './Contact.scss'
import shake from '../../images/shake.svg'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="email" name="" placeholder='email' />
          <textarea placeholder='Message' rows="10"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact