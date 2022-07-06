import React from 'react'
import "./TrendCard.css"
import {TrendCard} from "../../Data/TrendCard"

const TrentCard = () => {
  return (
    <div className="TrentCard">
        <h2> Thanks for you</h2>
        {TrendCard.map((trend) => {
          return (
            <div className="trend"> 
               <span>#{trend.name}</span>
               <span>{trend.share}k Shares.</span>
            </div>
          )
        })}
        </div>
  )
}

export default TrentCard