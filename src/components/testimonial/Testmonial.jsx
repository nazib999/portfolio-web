import React from 'react'
import './Testmonial.scss'
import banner from '../../images/banner.png'
import mobile from '../../images/mobile.png'
import arrow from '../../images/right-arrow.png'

const data=[
  {
    id:1,
    icon:mobile,
    title:"jefoe neifoeuf uefhe",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner,
    name:'alex'
  },
  {
    id:2,
    featured:true,
    icon:mobile,
    title:"second neifoeuf uefhe",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner,
    name:'fles'
  },
  {
    id:2,
    icon:mobile,
    title:"third neifoeuf uefhe",
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!',
    img:banner,
    name:'nazib'
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