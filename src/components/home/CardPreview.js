import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";
import axios from "axios";
import {changeName, changeNotes, changeSiteUrl, changeSiteUsername, changeSitePassword} from "../../redux/card";

const URL = 'http://localhost:5432/api'

const CardPreview = ({name})=>{
  const dispatch = useDispatch();

  const openCard = async (e)=>{
    e.preventDefault();

    // ** body to pass into axios **
    let body = {
      siteName: name,
      username: localStorage.getItem('username')
    }

    // ** axios call to retrieve the data from the selected card preview **
    await axios.post(`${URL}/viewCard`, body)
      .then(res => {
        dispatch(changeName(res.data.site_name))
        dispatch(changeSiteUrl(res.data.site_url))
        dispatch(changeSitePassword(res.data.site_password))
        dispatch(changeSiteUsername(res.data.site_username))
        dispatch(changeNotes(res.data.notes))
      }).catch(err => console.log(err));

    // ** shows the card **
    dispatch(switchHidden(true))
  }

  return (
    <div
      onClick={openCard}
      className='preview'>
      <h1 className='preview-title'>{name}</h1>
    </div>
  )
}

export default CardPreview;