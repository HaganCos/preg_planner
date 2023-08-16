import React from 'react'
import './Update.css'
import { UpdateData } from '../../data/Update'

const Updates = () => {
  return (
    <div className="Updates">
      {UpdateData.map((update)=>{
        return(
          <div className="update">
            <img src={update.img} alt="" />
            <div className="notify">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.purpose}</span><br />
                <span>{update.hospital}</span><br />
                <span>Loc: {update.location}</span> 
              </div>
                <span>{update.date}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates