import React from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
           <img src={Logo} alt=""/>
           <div className='WebName'>
              <h1>Social Media Club</h1>
              <h6>Explore the ideas throughout the world</h6>
           </div>
        </div>
        <SingUp/>
        </div>
  )
}

function SingUp(){
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>


                <h3>SingUp</h3>

                 <div>
                  <input
                  type="text" 
                  placeholder='First Name'
                  className='infoInput'
                  name='FirstName'/>
                  <input
                  type="text" 
                  placeholder='Last Name'
                  className='infoInput'
                  name='LastName'/>
                 </div>
                 <div>
                    <input 
                    type="text"
                    className='infoInput'
                    name='username'
                    placeholder='Username'/>
                 </div>
                 <div>
                 <input
                  type="text" 
                  placeholder='Password'
                  className='infoInput'
                  name='Password'/>
                  <input
                  type="text" 
                  placeholder='Confirm Password'
                  className='infoInput'
                  name='ConfirmPass'/>
                  </div>

                  <div>
                    <span> Alredy have an account. Login!!</span>
                  </div>
                  <button className="button infoButton" type= "Submit"> SingUp</button>
            </form>
        </div>
    )
}

export default Auth