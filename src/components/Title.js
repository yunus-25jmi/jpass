import React from "react";
import {useDispatch} from "react-redux";
import {switchSignup} from "../redux/signup";
import {switchLogin} from "../redux/login";

const Title = ({setLogin})=>{
  const dispatch = useDispatch();

  return (
    <div className='title-container'>
      <h1 className='title'>J-Pass</h1>
      <section className='title-btn-container'>
        <button onClick={()=>dispatch(switchLogin())} className='login-btn'>Login</button>
        <button onClick={()=>dispatch(switchSignup())} className='sign-up-btn'>Sign Up</button>
      </section>
    </div>
  )
}

export default Title;