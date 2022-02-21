import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCardNum, changeSiteUrl, changeSitePassword, changeName, changeSiteUsername, changeNotes} from "../../redux/card";
import {updateSites} from "../../redux/sites";
import axios from "axios";
import {useFormik} from "formik";
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
    onSubmit: (values)=>{
      const {siteName, siteUsername, sitePassword, siteUrl, notes} = values;
      dispatch(changeName(siteName))
      dispatch(changeSiteUsername(siteUsername))
      dispatch(changeSitePassword(sitePassword))
      dispatch(changeSiteUrl(siteUrl))
      dispatch(changeNotes(notes))

      const body = {
        ...values,
        username,
        userId
      }

      axios.post(`${URL}/addCard`, body)
        .then(res =>{
          console.log(res.data)
        }).catch(err =>{
          alert(err.response.data)
      })
    }
  })

  return (
    <div className='create-container'>
      <h1 className='create-card-title'>Create New Card</h1>
      <form
        onSubmit={formik.handleSubmit}
        className='create-form'>
        <input
          className='create-input'
          type='text'
          value={formik.values.siteName}
          name='siteName'
          placeholder='Site Name'
          onChange={formik.handleChange}/>
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
        <textarea
          className='create-input notes'
          placeholder='Notes...'
          value={formik.values.notes}
          name='notes'
          onChange={formik.handleChange}/>
        <button
          type='submit'
          className='create-card-btn'>Submit
        </button>
      </form>
    </div>
  )
}

export default CreateCard;