import React from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {
    
    const [modalOpened, setModalOpened] = useState(false)


  return (
    <div className='InfoCard'>
        <div className='InfoHead'>
             <h2>Your Info</h2>
             <div>
                <UilPen width= "2rem" height= "1.2rem" onClick={() => setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
             </div>
        </div>
        <div className='Info'>
            <span>
                <b>Status </b>
            </span>
            <span>
                <b>Relationship</b>
            </span>
        </div>
        <div className='Info'>
            <span>
                <b>Lives in </b>
            </span>
            <span>
                <b>Cali</b>
            </span>
        </div>
        <div className='Info'>
            <span>
                <b>Works at </b>
            </span>
            <span>
                <b>Henry</b>
            </span>
        </div>
        <button className='button Logout-button'>
            Logout
        </button>
    </div>
  )
}

export default InfoCard