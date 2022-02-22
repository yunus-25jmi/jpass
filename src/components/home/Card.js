import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrashCan, faBackward} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";
import axios from "axios";
import CryptoJS from "crypto-js";

const URL = 'http://localhost:5432/api'

const Card = ()=>{
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);
  const key = useSelector(state => state.key)

  const handleDelete = ()=>{
    const body = {
      ...card,
      username: localStorage.getItem('username')
    }

    ///** delete method for database **
    axios.post(`${URL}/deleteCard`, body)
      .catch(err => console.log(err))

    dispatch(switchHidden(false))
  }

  const handleDecrypt = ()=>{
    const decrypted = CryptoJS.AES.decrypt(card.sitePassword, key.password);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  return (
    <div className='card-page'>
      <div className='card'>
        <FontAwesomeIcon
          className='card-exit'
          onClick={()=>dispatch(switchHidden(false))} icon={faBackward} />
        <FontAwesomeIcon
          className='card-delete'
          onClick={handleDelete}
          icon={faTrashCan} />
        <h1 className='card-name card-info'>{card.siteName}</h1>
        <h2 className='card-username card-info'>{card.siteUsername}</h2>
        <h2 className='card-pass card-info'>{handleDecrypt()}</h2>
        <h2 className='card-url card-info'>{card.siteUrl}</h2>
        <p className='card-notes card-info'>{card.notes}</p>
      </div>
    </div>
  )
}

export default Card;