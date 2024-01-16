import React, { useState } from 'react'
import './Works.scss'

import mobile from '../../images/mobile.png'
import banner from '../../images/banner.png'
import arrow from "../../images/arrow.png"
const data=[
  {
    id:1,
    icon:mobile,
    title:"the tittle",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner,
    name:'alex'
  },
  {
    id:1,
    icon:mobile,
    title:"second neifoeuf uefhe",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner
  },
  {
    id:1,
    icon:mobile,
    title:"third neifoeuf uefhe",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner
  },
]

const Works = () => {
  const [current,setCurrent] = useState(0);
  const next=()=>{
    setCurrent(current===2?0:((pre)=>pre+1))
  }
  const pre=()=>{
  setCurrent(current===0?2:((pre)=>pre-1))
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${current*100}vw)`}}>
        {data.map((d)=>
        <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="" />
              </div>
              <h2>{d.title}</h2>
              <p>{d.des}</p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src='https://cdn.dribbble.com/users/4778017/screenshots/17493828/media/65d35f64560c90ed197938c351d68298.jpg?resize=450x338&vertical=center' alt="" />
          </div>
        </div>
       
      </div>)}
        
      </div>
      <img src={arrow} alt="" className='arrow left' onClick={pre}/>
      <img src={arrow} alt="" className='arrow right' onClick={next}/>
    </div>
  )
}

export default Works