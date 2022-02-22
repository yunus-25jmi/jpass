import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";

const Card = ()=>{
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);

  // useEffect(()=>{
  //   console.log(card)
  // }, [])

  return (
    <div className='card-page'>
      <div className='card'>
        <FontAwesomeIcon
          className='card-exit'
          onClick={()=>dispatch(switchHidden(false))} icon={faCircleXmark} />
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