import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import {userSchema} from "../validations/UserValidation";
import * as yup from "yup";

const URL = 'http://localhost:5432/api'

const SignUp = ()=>{
  const initalUserState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  }

  const initialValidState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  }

  const [valid, setValid] = useState(initialValidState)
  const [confirm, setConfirm] = useState('')
  const [user, setUser] = useState(initalUserState)

  // useNavigate hook for navigating pages from react-router.
  let nav = useNavigate();

  // main register function, posts an axios call to the database
  const handleSubmit = async (e)=> {
    e.preventDefault();
    const isValid = await userSchema.isValid(user)
    console.log(isValid)

    if(isValid){
      if(confirm === user.password){
        axios.post(`${URL}/User`, user)
          .then(res =>{
            console.log(res.data[0][0].username)
            localStorage.setItem('username', res.data[0][0].username)
          }).catch(err => {
          console.log(err.response.data)
          alert(err.response.data)
        });
      } else {
        alert("Passwords must match")
      }
      // await nav('/home');
    } else {

    }
  }


  const handleFirstname = (e)=> setUser({...user, firstname: e.target.value});
  const handleLastname = (e)=> setUser({...user, lastname: e.target.value});
  const handleEmail = (e)=> setUser({...user, email: e.target.value});
  const handleUsername = (e)=> setUser({...user, username: e.target.value});
  const handlePassword = (e)=> setUser({...user, password: e.target.value});;
  const handleConfirm = (e)=> setConfirm(e.target.value)

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className='form-div'>
          <input
            onChange={handleFirstname}
            className='signup-input'
            type='text'
            placeholder='first name'/>
          <p className='form-div-p'>{valid.firstname}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleLastname}
            className='signup-input'
            type='text'
            placeholder='last name'/>
          <p className='form-div-p'>{valid.lastname}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleEmail}
            className='signup-input'
            type='email'
            placeholder='email'/>
          <p className='form-div-p'>{valid.email}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleUsername}
            type='text'
            className='signup-input'
            placeholder='username'/>
          <p className='form-div-p'>{valid.username}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handlePassword}
            className='signup-input'
            type='password'
            placeholder='password'/>
          <p className='form-div-p'>{}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleConfirm}
            className='signup-input'
            type='password'
            placeholder='confirm password'/>
          <p className='form-div-p'>{}</p>
        </div>
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