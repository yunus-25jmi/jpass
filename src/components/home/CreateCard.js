import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCardNum, changeSiteUrl, changeSitePassword, changeName, changeSiteUsername, changeNotes} from "../../redux/card";
import {updateSites, addSites} from "../../redux/sites";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
const URL = 'http://localhost:5432/api'

const CreateCard = ()=>{
  const dispatch = useDispatch();
  const {username, userId} = useSelector(state => state.user);

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
        .max(50).required('Site name required'),
      notes: Yup.string()
        .max(100, 'Cannot be more than 100 characters')
    }),

    onSubmit: (values)=>{
      const {siteName, siteUsername, sitePassword, siteUrl, notes} = values;

      dispatch(changeName(siteName))
      dispatch(changeSiteUsername(siteUsername))
      dispatch(changeSitePassword(sitePassword))
      dispatch(changeSiteUrl(siteUrl))
      dispatch(changeNotes(notes))

      const body = {
        ...values,
        username: username || localStorage.getItem('username'),
        userId: userId || localStorage.getItem('userId')
      }

      axios.post(`${URL}/addCard`, body)
        .then(res =>{
          dispatch(addSites(res.data))
        }).catch(err =>{
          alert(err.response.data)
      })

      // ** form reset function provided by formik **
      formik.resetForm();
    }
  })

  return (
    <div className='create-container'>
      <h1 className='create-card-title'>Create New Card</h1>
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
        <input
          className='create-input'
          type='password'
          placeholder='Password'
          name='sitePassword'
          value={formik.values.sitePassword}
          onChange={formik.handleChange}/>
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
  )
}

export default CreateCard;