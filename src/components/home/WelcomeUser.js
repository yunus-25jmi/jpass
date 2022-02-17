import React from "react";
import {useSelector} from "react-redux";

const WelcomeUser = ()=>{
  const {firstname} = useSelector(state => state.changeUser);

  return (
    <div className='welcome'>
      <div className='home-welcome'>
        <h1 className='home-welcome-title'>{firstname}</h1>
      </div>
    </div>

  )
}

export default WelcomeUser;