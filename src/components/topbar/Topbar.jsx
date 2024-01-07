import React from 'react'
import './Topbar.scss'
import {Email,Person} from '@mui/icons-material';

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar '+(menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <div className="logo">genius.</div>
                <div className="item">
                 <Person className="icon"/>
                 <span>+343 342 232</span>
                </div>
                <div className='item'>
                    <Email className='icon'/>
                    <span>safak@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="item1"></span>
                    <span className="item2"></span>
                    <span className="item3"></span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Topbar