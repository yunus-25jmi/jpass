import React from "react";

const WelcomeUser = ()=>{

  return (
    <div className='welcome'>
      <div className='home-welcome'>
        <h1 className='home-welcome-title'>{localStorage.getItem('username')}</h1>
      </div>
    </div>

  )
}

export default WelcomeUser;