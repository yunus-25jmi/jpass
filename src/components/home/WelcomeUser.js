import React from "react";
import Logout from "./Logout";

const WelcomeUser = ()=>{

  return (
    <div className='welcome'>
      <div className='home-welcome'>
        <h1 className='home-welcome-welcome'>Welcome</h1>
        <h1 className='home-welcome-title'>{localStorage.getItem('username')}</h1>
      </div>
      <Logout />
    </div>

  )
}

export default WelcomeUser;