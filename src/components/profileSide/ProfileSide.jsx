import React from 'react'
import FollowerCards from '../FollowerCards/FollowerCards'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./profileSide.css"


function ProfileSide() {
  return (
    <div className='profileSide'>
         <LogoSearch/>
         <ProfileCard/>
         <FollowerCards/>
        </div>
  )
}

export default ProfileSide