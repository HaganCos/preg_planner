import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <AnimateSharedLayout>
        <CompactCard param={props} />
      </AnimateSharedLayout>
    </div>
  )
}

//CompactCard
function CompactCard({param}) {
  const Icon = param.icon;
  return(
    <div className="CompactCard"
    style={{ 
      background: param.color.background,
      boxShadow: param.color.boxShadow
     }}
    >

      <div className="radialBar">
        <img src={param.img} alt="" />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Icon/>
        <span>{param.info}</span>
        <span> Click Badge </span>
      </div>
    
    </div>
  )
}

export default Card