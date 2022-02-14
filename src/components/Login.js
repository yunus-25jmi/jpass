import React from "react";
import { useNavigate} from "react-router";

const Login = ()=>{
  let nav = useNavigate();

  const handleLogin = ()=>{
    nav('/home')
  }

  return (
    <div className='login-container'>
      <form className='login-form'>
        <input
          type='text'
          placeholder='username'
          className='login-user'/>
        <input
          className='login-pass'
          type='password'
          placeholder='password'/>
        <button onClick={handleLogin} className='login-submit-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login;