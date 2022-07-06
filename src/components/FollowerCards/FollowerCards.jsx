import React from 'react'
import "./FollowerCards.css"

import {Followers} from "../../Data/FollowersData"
const FollowerCards = () => {
  return (
    <div className="FollowerCards">
        <h2>Who is following you</h2>
        {Followers.map((follower, id)=>{
            return (
                <div className="Follower"> 
                <div> 
                    <img src={follower.img} alt= "" className='FollowerImg'/>
                    <div className='Name'>
                       <span>{follower.name}</span>
                       <span>@{follower.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>
                    Follow
                </button>
                </div>
            )
        })}
        </div>
  )
}

export default FollowerCards