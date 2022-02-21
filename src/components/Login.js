import React, {useState} from "react";
import { useNavigate} from "react-router";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {changeUsername, changeLastName, changeFirstName, changeEmail, updateId} from "../redux/user";
import {switchLoginStatus} from "../redux/isLoggedIn";
import {useFormik} from "formik";
import * as Yup from 'yup';

// ** main url to back end **
const URL = 'http://localhost:5432/api'

const Login = ()=>{
  const dispatch = useDispatch();
  let nav = useNavigate();

  const user = useSelector(state => state.user)

  // ** formik function **
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },

    // ** validation **
    validationSchema: Yup.object({
      username: Yup.string().required('Must enter a username'),
      password: Yup.string().required('Must enter a valid password')
    }),

    // ** on submit function **
    onSubmit: (values)=>{
      axios.post(`${URL}/getUser`, values)
        .then(res =>{
          if(res.data === true){
            nav('/home');
          }
        }).catch(err => {
          alert(err.response.data)
          console.log(err)
      });
    }
  })

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          type='text'
          value={formik.values.username}
          name='username'
          placeholder='username'
          className='login-user'/>
        <input
          onChange={formik.handleChange}
          className='login-pass'
          name='password'
          value={formik.values.password}
          type='password'
          placeholder='password'/>
        <button
          type='submit'
          className='login-submit-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login;