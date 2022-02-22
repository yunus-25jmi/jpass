import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrashCan, faBackward} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";
import axios from "axios";

const URL = 'http://localhost:5432/api'

const Card = ()=>{
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);

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
        <h2 className='card-pass card-info'>{card.sitePassword}</h2>
        <h2 className='card-url card-info'>{card.siteUrl}</h2>
        <p className='card-notes card-info'>{card.notes}</p>
      </div>
    </div>
  )
}

export default Card;