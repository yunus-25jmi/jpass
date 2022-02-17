import React, {useState} from "react";
import axios from "axios";
import {userSchema} from "../validations/UserValidation";
import {useDispatch, useSelector} from "react-redux";
import {changeFirstName, changePassword, changeUsername, changeLastName, changeEmail} from "../redux/changeUser";
import {switchSignup} from "../redux/signup";
const URL = 'http://localhost:5432/api'

const SignUp = ()=>{
  const [confirm, setConfirm] = useState('')
  const user = useSelector(state => state.changeUser);
  const dispatch = useDispatch();
  const {signUp} = useSelector(state => state.signup)

  // main register function, posts an axios call to the database
  const handleSubmit = async (e)=> {
    e.preventDefault();
    const isValid = await userSchema.isValid(user)
    console.log(isValid)
    console.log(user)

    if(isValid){
      if(confirm === user.password){
        axios.post(`${URL}/User`, user)
          .then(res =>{
            console.log(res.data[0])
          }).catch(err => {
          console.log(err.response.data)
          alert(err.response.data)
        });
      } else {
        alert("Passwords must match")
      }
      dispatch(switchSignup())
      alert('Account successfully created!')
    }
  }

  const handleFirstname = (e)=> dispatch(changeFirstName(e.target.value));
  const handleLastname = (e)=> dispatch(changeLastName(e.target.value));
  const handleEmail = (e)=> dispatch(changeEmail(e.target.value));
  const handleUsername = (e)=> dispatch(changeUsername(e.target.value));
  const handlePassword = (e)=> dispatch(changePassword(e.target.value));;
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
          <p className='form-div-p'>{}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleLastname}
            className='signup-input'
            type='text'
            placeholder='last name'/>
          <p className='form-div-p'>{}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleEmail}
            className='signup-input'
            type='email'
            placeholder='email'/>
          <p className='form-div-p'>{}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={handleUsername}
            type='text'
            className='signup-input'
            placeholder='username'/>
          <p className='form-div-p'>{}</p>
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