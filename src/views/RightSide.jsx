import React from 'react'
import './css/RideSide.css'
import Updates from './Update/Updates'
import VitalsReview from './VitalsReview/VitalsReview'


const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="upcoming">
        <h3>Events</h3>
        <Updates />
      </div>
      <div className="reviews">
        <h3>Vitals Reviews</h3>
        <VitalsReview />
      </div>
    </div>
  )
}

export default RightSide