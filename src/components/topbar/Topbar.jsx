import React from 'react'
import './Topbar.scss'
import {Email,Person} from '@mui/icons-material';

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar '+(menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <div className="logo">nazibullah.</div>
                <div className="item">
                 <Person className="icon"/>
                 <span>+880 1845136967</span>
                </div>
                <div className='item'>
                    <Email className='icon'/>
                    <span>najibullahnajib758@gmail.com</span>
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