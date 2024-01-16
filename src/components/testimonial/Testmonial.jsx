import React from 'react'
import './Testmonial.scss'

import mobile from '../../images/mobile.png'
import arrow from '../../images/right-arrow.png'

const data=[
  {
    id:1,
    icon:mobile,
    title:"Designer",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:'https://cdn.dribbble.com/userupload/3635222/file/original-b7b5c68d5e0db9aaac74b96061457807.jpg?resize=400x300&vertical=center',
    name:'alex'
  },
  {
    id:2,
    featured:true,
    icon:mobile,
    title:"Developer",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    name:'minan'
  },
  {
    id:2,
    icon:mobile,
    title:"Content creator",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600',
    name:'jhon'
  },
]

const Testmonial = () => {
  return (
    <div className='testmonial' id='testmonial'>
      <h1>Testmonial</h1>
      <div className="container">
        {data.map((d)=><div className={d.featured?'card featured':'card'}>
          <div className="top">
            <img src={arrow} alt=""  className='left'/>
            <img src={d.img} alt=""  className='user'/>
             <img src={d.icon} alt="" className='right'/>
          </div>
          <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloremque! Lorem ipsum dolor sit amet.</div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Testmonial