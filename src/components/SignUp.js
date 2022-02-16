import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const URL = 'http://localhost:5432/api'

const SignUp = ()=>{
  const initalUserState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  }

  const [confirm, setconfirm] = useState('')
  const [user, setUser] = useState(initalUserState)

  let nav = useNavigate();

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(confirm === user.password){
      axios.post(`${URL}/User`, user)
        .then().catch(err => console.log(err));
    } else {
      alert("Passwords must match")
    }
    nav('/home');
  }

  const handleFirstname = (e)=> setUser({...user, firstname: e.target.value});
  const handleLastname = (e)=> setUser({...user, lastname: e.target.value});
  const handleEmail = (e)=> setUser({...user, email: e.target.value});
  const handleUsername = (e)=> setUser({...user, username: e.target.value});
  const handlePassword = (e)=> setUser({...user, password: e.target.value});;
  const handleConfirm = (e)=> setconfirm(e.target.value)

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input
          onChange={handleFirstname}
          className='signup-input'
          type='text'
          placeholder='first name'/>
        <input
          onChange={handleLastname}
          className='signup-input'
          type='text'
          placeholder='last name'/>
        <input
          onChange={handleEmail}
          className='signup-input'
          type='email'
          placeholder='email'/>
        <input
          onChange={handleUsername}
          type='text'
          className='signup-input'
          placeholder='username'/>
        <input
          onChange={handlePassword}
          className='signup-input'
          type='password'
          placeholder='password'/>
        <input
          onChange={handleConfirm}
          className='signup-input'
          type='password'
          placeholder='confirm password'/>
        <button
          className='login-submit-btn'
          type='submit'
        >Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp;