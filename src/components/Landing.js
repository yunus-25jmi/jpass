import React from "react";
import Title from "./Title";
import Login from "./Login";
import SignUp from "./SignUp";
import {useSelector} from "react-redux";

const Landing = ()=>{
  const {signUp} = useSelector(state => state.signup)
  const {login} = useSelector(state => state.login)

  return (
    <div className='landing'>
      {!login && !signUp && <Title />}
      {login && <Login />}
      {signUp && <SignUp />}
    </div>
  )
}

export default Landing;