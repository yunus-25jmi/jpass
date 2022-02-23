import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import CryptoJS from "crypto-js";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {switchEdit} from "../../redux/showCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const URL = 'http://localhost:5432/api'

const Edit = ()=>{
  const dispatch = useDispatch();
  const {username, userId} = useSelector(state => state.user);
  const {password} = useSelector(state => state.key)
  const card = useSelector(state => state.card)

  const formik = useFormik({
    initialValues: {
      siteName: '',
      siteUsername: '',
      sitePassword: '',
      siteUrl: '',
      notes: ''
    },

    // ** validate the information typed in **
    validationSchema: Yup.object({
      siteName: Yup.string()
        .max(30).required('Site name required'),
      notes: Yup.string()
        .max(100, 'Cannot be more than 100 characters'),
      sitePassword: Yup.string()
        .max(30, 'Cannot be more than 30 characters')
    }),

    onSubmit: (values)=>{
      const {sitePassword} = values;

      // ** creating encrypted password for the site, before it goes to the back end **
      const encrypted = CryptoJS.AES.encrypt(sitePassword, password).toString();

      const body = {
        ...values,
        oldSite: card.oldSite,
        sitePassword: encrypted,
        username: username || localStorage.getItem('username'),
        userId: userId || localStorage.getItem('userId')
      }

      // ** axios call to post the new information **
      axios.post(`${URL}/editCard`, body)
        .then(res =>{
          console.log(res.data)
        }).catch(err =>{
        alert(err.response.data)
      })

      // ** form reset function provided by formik **
      formik.resetForm();
      // ** switching off edit card **
      dispatch(switchEdit(false));
    }
  })

  return (
    <div className='edit-page'>
      <div className='create-container edit-container'>
        <FontAwesomeIcon
          className='card-exit'
          icon={faCircleXmark}
          onClick={()=>dispatch(switchEdit(false))}/>
        <form
          onSubmit={formik.handleSubmit}
          className='create-form'>
          <div>
            <input
              className='create-input'
              type='text'
              value={formik.values.siteName}
              name='siteName'
              placeholder='Site Name'
              onChange={formik.handleChange}/>
            <p className='form-div-p'>{formik.errors.siteName}</p>
          </div>
          <input
            className='create-input'
            type='text'
            placeholder='username'
            name='siteUsername'
            value={formik.values.siteUsername}
            onChange={formik.handleChange}/>
          <div>
            <input
              className='create-input'
              type='password'
              placeholder='Password'
              name='sitePassword'
              value={formik.values.sitePassword}
              onChange={formik.handleChange}/>
            <p className='form-div-p'>{formik.errors.sitePassword}</p>
          </div>
          <input
            className='create-input'
            type='text'
            placeholder='Site URL'
            value={formik.values.siteUrl}
            name='siteUrl'
            onChange={formik.handleChange}/>
          <div>
          <textarea
            className='create-input notes'
            placeholder='Notes...'
            value={formik.values.notes}
            name='notes'
            onChange={formik.handleChange}/>
            <p className='form-div-p'>{formik.errors.notes}</p>
          </div>
          <button
            type='submit'
            className='create-card-btn'>Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit;