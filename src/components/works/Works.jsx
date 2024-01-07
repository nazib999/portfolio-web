import React from 'react'
import './Works.scss'

const Works = () => {
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore dicta enim nisi consequuntur inventore, quam hic deserunt tenetur numquam!</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://img.freepik.com/free-vector/travel-landing-page_52683-4854.jpg?size=626&ext=jpg&ga=GA1.1.443864448.1703073303&semt=ais" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="" className='arrow left'/>
      <img src="assets/arrow.png" alt="" className='arrow right'/>
    </div>
  )
}

export default Works