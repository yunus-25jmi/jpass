import React from "react";

const SignUp = ()=>{

  return (
    <div className='signup-container'>
      <form className='signup-form'>
        <input
          className='signup-input'
          type='text'
          placeholder='first name'/>
        <input
          className='signup-input'
          type='text'
          placeholder='last name'/>
        <input
          className='signup-input'
          type='email'
          placeholder='email'/>
        <input
          type='text'
          className='signup-input'
          placeholder='username'/>
        <input
          className='signup-input'
          type='password'
          placeholder='password'/>
        <input
          className='signup-input'
          type='password'
          placeholder='confirm password'/>
        <button className='login-submit-btn'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;