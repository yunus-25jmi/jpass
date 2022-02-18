import React from "react";
import {useSelector} from "react-redux";
import Logout from "./Logout";

const WelcomeUser = ()=>{
  const {firstname} = useSelector(state => state.user);

  return (
    <div className='welcome'>
      <div className='home-welcome'>
        <h1 className='home-welcome-title'>{firstname}</h1>
      </div>
      <Logout />
    </div>

  )
}

export default WelcomeUser;