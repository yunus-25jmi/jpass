import React, {useState} from "react";
import { useNavigate} from "react-router";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {changeUsername, changeLastName, changeFirstName, changeEmail, updateId} from "../redux/user";
import {switchLoginStatus} from "../redux/isLoggedIn";


const Login = ()=>{
  const dispatch = useDispatch();
  let nav = useNavigate();
  const URL = 'http://localhost:5432/api'
  const user = useSelector(state => state.user)
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const handleLogin = async (e)=>{
    e.preventDefault()
    let correctInfo;
    await axios.post(`${URL}/getUser`, input)
      .then(res =>{
        if(res.data === true){
          correctInfo = true;
        } else {
          correctInfo = false;
          alert('wrong password or username')
        }
      }).catch(err => console.log(err))

    if(correctInfo === true){
      console.log(correctInfo)
      await axios.post(`${URL}/getInfo`, input)
        .then(res =>{
          dispatch(changeFirstName(res.data.firstname))
          dispatch(changeLastName(res.data.lastname))
          dispatch(changeUsername(res.data.username))
          dispatch(changeEmail(res.data.email))
          dispatch(switchLoginStatus(true));
          dispatch(updateId(res.data.user_id))
        })
      nav('/home')
    }
  }

  const handleUsername=(e)=>{
    setInput(prevState => ({
      ...prevState, username: e.target.value
    }))
  }

  const handlePassword = (e)=>{
    setInput(prevState => ({
      ...prevState,
      password: e.target.value
    }))
  }

  return (
    <div className='login-container'>
      <form className='login-form'>
        <input
          onChange={handleUsername}
          type='text'
          placeholder='username'
          className='login-user'/>
        <input
          onChange={handlePassword}
          className='login-pass'
          type='password'
          placeholder='password'/>
        <button onClick={handleLogin} className='login-submit-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login;