import React, { useState } from 'react'
import './Portfolio.scss'
import PortfolioList from '../portfoliolist/PortfolioList'
import { webPortfolio,featuredPortfolio,mobilePortfolio,designPortfolio,contentPortfolio } from '../../Data'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const list =[
    {
        id:'featured',
        title:'Featured'
    },
    {
        id:'web app',
        title:'Web App'
    },
    {
        id:'mobile app',
        title:'Mobile App'
    },
    {
        id:'design',
        title:'Design'
    },
    {
        id:'content',
        title:'Content'
    },

]

const Portfolio = () => {
    const [selected,setSelected] = useState('featured');
    const [data,setData] = useState([]);

    useEffect(() => {
      switch (selected) {
        case 'web app':
            setData(webPortfolio)
            break;
            case 'mobile app':
            setData(mobilePortfolio)
            break;
            case 'featured':
            setData(featuredPortfolio)
            break;
            case 'design':
            setData(designPortfolio)
            break;
            case 'content':
            setData(contentPortfolio)
            break;
      
        default:
            break;
      }
    }, [selected])
    
  return (
    <div className='portfolio' id='portfolio'>
    <h1>PORTFOLIO</h1>
    <ul>
        {list.map((item)=><PortfolioList title={item.title} active={item.id===selected} 
        setSelected={setSelected} id={item.id}/>)}
    </ul>
    <div className="container">
        {data.map((it)=><div className="item">
            <img src={it.img} alt="" />
            <a href={it.title}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>)}
        
       
    </div>
    
    </div>
  )
}

export default Portfolio