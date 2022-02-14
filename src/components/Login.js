import React from "react";

const Login = ()=>{

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
        <button className='login-submit-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login;