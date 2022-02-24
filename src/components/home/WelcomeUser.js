import React from "react";
import Logout from "./Logout";
import {useSelector} from "react-redux";
import Exit from "./Exit";

const WelcomeUser = ()=>{
  const {small} = useSelector(state => state.smallScreen);

  return (
    <div className='welcome'>
      <div className='home-welcome'>
        <h1 className='home-welcome-welcome'>Welcome</h1>
        <h1 className='home-welcome-title'>{localStorage.getItem('username')}</h1>
      </div>
      {!small && <Logout/>}
      {small && <Exit />}
    </div>

  )
}

export default WelcomeUser;