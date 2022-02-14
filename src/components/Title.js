import React from "react";

const Title = ({setLogin, setSignUp})=>{

  const handleLogin= ()=>{
    setLogin(true)
  }

  const handleSignUp = ()=>{
    setSignUp(true)
  }

  return (
    <div className='title-container'>
      <h1 className='title'>J-Pass</h1>
      <section className='title-btn-container'>
        <button onClick={handleLogin} className='login-btn'>Login</button>
        <button onClick={handleSignUp} className='sign-up-btn'>Sign Up</button>
      </section>
    </div>
  )
}

export default Title;