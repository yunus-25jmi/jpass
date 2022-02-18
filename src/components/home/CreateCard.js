import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {originalSiteName, changeSiteUrl, changeSitePassword, changeName, changeSiteUsername, changeNotes} from "../../redux/card";
import axios from "axios";
const URL = 'http://localhost:5432/api'

const CreateCard = ()=>{
  const dispatch = useDispatch();
  const card = useSelector(state => state.card)
  const user = useSelector(state => state.user);

  const body = {
    ...card,
    ...user
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post(`${URL}/addCard`, body)
      .then(res =>{
        console.log(res.data)
      }).catch(err => console.log(err));
  }

  return (
    <div className='create-container'>
      <h1 className='create-card-title'>Create New Card</h1>
      <form
        onSubmit={handleSubmit}
        className='create-form'>
        <input
          className='create-input'
          type='text'
          placeholder='Site Name'
          onChange={(e)=>{
            dispatch(changeName(e.target.value))
            dispatch(originalSiteName(e.target.value))
          }}/>
        <input
          className='create-input'
          type='text'
          placeholder='username'
          onChange={(e)=>dispatch(changeSiteUsername(e.target.value))}/>
        <input
          className='create-input'
          type='password'
          placeholder='Password'
          onChange={(e)=>dispatch(changeSitePassword(e.target.value))}/>
        <input
          className='create-input'
          type='text'
          placeholder='Site URL'
          onChange={(e)=>dispatch(changeSiteUrl(e.target.value))}/>
        <textarea
          className='create-input notes'
          placeholder='Notes...'
          onChange={(e)=>dispatch(changeNotes(e.target.value))}/>
        <button
          type='submit'
          className='create-card-btn'>Submit
        </button>
      </form>
    </div>
  )
}

export default CreateCard;