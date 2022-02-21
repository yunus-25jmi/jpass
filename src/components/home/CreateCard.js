import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCardNum,originalSiteName, changeSiteUrl, changeSitePassword, changeName, changeSiteUsername, changeNotes} from "../../redux/card";
import {updateSites} from "../../redux/sites";
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

  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch(changeCardNum())
    if(card.originalSiteName === ''){

    }

    await axios.post(`${URL}/addCard`, body)
      .catch(err => alert(err.response.data));

    await axios.post(`${URL}/getCards`, body)
      .then(res =>{
        console.log(res.data)
        // dispatch(updateSites(res.data))
      }).catch(err => console.log(err));
  }

  useEffect(()=>{
    axios.post(`${URL}/getCards`, body)
      .then(res =>{
        console.log(res.data)
      }).catch(err => console.log(err));
  }, [])

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