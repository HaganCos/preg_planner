import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
  const Png = param.png
  return(
    <div className="CompactCard"
    style={{ 
      background: param.color.background,
      boxShadow: param.color.boxShadow
     }}
    >
      <div className="radialBar">
        <CircularProgressbar 
        value={param.barValue}
        text={ `${param.barValue}`}/>
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span> Last Recorded</span>
      </div>
    </div>
  )
}
export default Card