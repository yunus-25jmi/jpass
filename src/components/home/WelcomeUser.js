import React from "react";

const WelcomeUser = ()=>{

  return (
      <div className='home-welcome'>
        <h1 className='home-welcome-title'>{localStorage.getItem('username')}</h1>
      </div>
  )
}

export default WelcomeUser;