import React from 'react'
import "./ProfileCard.css"
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.png"

function ProfileCard() {


    const ProfilePage = true;
  return (
    <div className='ProfileCard'>
        <div className='ProfileCardIMG'>
            <img src={Cover} alt= ""/>
            <img src={Profile} alt= "" />
        </div>
        <div className='ProfileName'>
         <span>David Estrada</span>
         <span>Developer FullStack</span>
        </div>
        <div className='followStatus'>
         <hr/>
         <div>
            <div className='follow'>
                <span>90,000</span>
                <span>Followers</span>
            </div>
            
            <div className='vl'>
                
                 <hr/>
            </div>
            <div className='follow'>
                <span>1</span>
                <span>Followings</span>
            </div>
           {ProfilePage && (
            <>
            <div className='vl'>
            </div>
            <div className='follow'>
                  <span>12</span>
                  <span>posts</span>
            </div>
            </>
           )}
         </div>
         {ProfilePage ? "" :  <span>
            My Profile
         </span>}
        
        </div>
        </div>
  )
}

export default ProfileCard

