import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {faBackward} from "@fortawesome/free-solid-svg-icons";
import {switchSignup} from "../redux/signup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// ** main url for back end **
const URL = 'http://localhost:5432/api'

const SignUp = ()=>{
  const dispatch = useDispatch();

  // ** redux toolkit stuff **
  const user = useSelector(state => state.user);

  // ** creating formik for user registration **
  const formik = useFormik({
    initialValues: {
      ...user
    },

    // ** validating parameters **
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(25, 'Must be 25 characters or less').required('First name Required'),
      lastname: Yup.string()
        .max(25, 'Must be 25 characters or less').required('Last name required'),
      email: Yup.string()
        .email('Please enter a valid email').required('email required'),
      username: Yup.string()
        .max(25, 'Must be 50 characters or less').required('username required'),
      password: Yup.string()
        .required("Required")
        .min(12, "Must be 12 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/[@$!%*#?&]+/, "One special character")
        .matches(/\d+/, "One number"),
    }),

    // ** on submit function for form **
    onSubmit: (values)=>{
      axios.post(`${URL}/User`, values)
        .then(res =>{
          console.log(res.data)
        }).catch(err => {
          alert(err.response.data)
        console.log(err)
      });
    },
  });

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={formik.handleSubmit}>
        <div className='form-div'>
          <input
            onChange={formik.handleChange}
            className='signup-input'
            type='text'
            name='firstname'
            placeholder='first name'
            value={formik.values.firstname}/>
          <p className='form-div-p'>{formik.errors.firstname}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={formik.handleChange}
            className='signup-input'
            type='text'
            name='lastname'
            placeholder='last name'/>
          <p className='form-div-p'>{formik.errors.lastname}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={formik.handleChange}
            className='signup-input'
            type='email'
            name='email'
            placeholder='email'/>
          <p className='form-div-p'>{formik.errors.email}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={formik.handleChange}
            type='text'
            name='username'
            className='signup-input'
            placeholder='username'/>
          <p className='form-div-p'>{formik.errors.username}</p>
        </div>
        <div className='form-div'>
          <input
            onChange={formik.handleChange}
            className='signup-input'
            type='password'
            name='password'
            placeholder='password'/>
          <p className='form-div-p'>{formik.errors.password}</p>
        </div>
        <button
          className='login-submit-btn'
          type='submit'
        >Sign Up
        </button>
      </form>
      <FontAwesomeIcon
        className='back-to-title-btn'
        icon={faBackward}
        onClick={()=> dispatch(switchSignup())}/>
    </div>
  )
}

export default SignUp;