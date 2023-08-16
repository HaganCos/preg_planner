import React from 'react'
import './DashboardCard.css'
import { DashCardData } from '../../../data/DashBoard'
import Card from './card/Card'

const DashboardCards = () => {
  return (
    <div className="Cards">
      {DashCardData.map((card, id)=>{
        return(
          <div className="mainContainer">
            <Card 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            />
          </div>
        )
      })}
    </div>
  )
}

export default DashboardCards