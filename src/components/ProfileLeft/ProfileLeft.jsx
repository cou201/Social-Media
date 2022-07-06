import React from 'react'
import FollowerCards from '../FollowerCards/FollowerCards'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'


const ProfileLeft = () => {
  return (
    <div className='profileSide'>
        <LogoSearch/>
        <InfoCard/>
        <FollowerCards/>
    </div>
  )
}

export default ProfileLeft