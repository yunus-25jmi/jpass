import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSiteUrl, changePassword, changeName, changeUsername, changeNotes} from "../../redux/card";


const CreateCard = ()=>{
  const dispatch = useDispatch();
  const card = useSelector(state => state.card)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('submit')
    console.log(card)
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
          onChange={(e)=>dispatch(changeName(e.target.value))}/>
        <input
          className='create-input'
          type='text'
          placeholder='username'
          onChange={(e)=>dispatch(changeUsername(e.target.value))}/>
        <input
          className='create-input'
          type='password'
          placeholder='Password'
          onChange={(e)=>dispatch(changePassword(e.target.value))}/>
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