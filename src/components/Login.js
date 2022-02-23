import React from "react";
import { useNavigate} from "react-router";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {changeUsername, updateId} from "../redux/user";
import {switchLogin} from "../redux/login";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward} from "@fortawesome/free-solid-svg-icons";
import CryptoJS from "crypto-js";
import {hashPassword} from "../redux/key";
import {switchLoading} from "../redux/isLoading";

// ** main url to back end **
const URL = 'http://localhost:5432/api'

const Login = ()=>{
  const dispatch = useDispatch();
  let nav = useNavigate();

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
      // ** switch loading icon to true** //
      dispatch(switchLoading())

      const newKey = CryptoJS.SHA256(values.password).toString()
      dispatch(hashPassword(newKey))
      localStorage.setItem('userKey', newKey);

      axios.post(`${URL}/getUser`, values)
        .then(res =>{
          if(res.data.result === true){
            dispatch(updateId(res.data.user_id))
            localStorage.setItem('userId', res.data.user_id)
            dispatch(switchLoading())
            nav('/home');
          }
        }).catch(err => {
          alert(err.response.data)
          console.log(err)
      });

      dispatch(changeUsername(values.username))
      localStorage.setItem('username', values.username)
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
      <FontAwesomeIcon
        className='back-to-title-btn'
        icon={faBackward}
        onClick={()=> dispatch(switchLogin())}/>
    </div>
  )
}

export default Login;