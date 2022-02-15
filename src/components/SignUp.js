import React, {useState} from "react";
import { useNavigate} from "react-router";
import axios from "axios";

const SignUp = ()=>{
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setconfirm] = useState('')
  const [user, setUser] = useState(null)

  // let nav = useNavigate();

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(confirm !== password){
      alert('Passwords must match.')
    } else {
      setUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      })
      axios.post('http://localhost:5432/api/users', user)
        .then(res => {
          console.log(res.data)
        }).catch(err => console.log(err))
    }
    // nav('/home');
    // console.log(user)
  }

  const handleFirstname = (e)=> setFirstName(e.target.value);
  const handleLastname = (e)=> setLastName(e.target.value);
  const handleEmail = (e)=> setEmail(e.target.value);
  const handleUsername = (e)=> setUsername(e.target.value);
  const handlePassword = (e)=> setPassword(e.target.value);
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