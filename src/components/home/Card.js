import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const Card = ({setCard})=>{

  return (
    <div className='card-page'>
      <div className='card'>
        <FontAwesomeIcon
          className='card-exit'
          onClick={()=>setCard(false)} icon={faCircleXmark} />
        <h1 className='card-name card-info'>Site Name</h1>
        <h2 className='card-username card-info'>User name</h2>
        <h2 className='card-pass card-info'>*********</h2>
        <h2 className='card-url card-info'>Sit URL</h2>
        <p className='card-notes card-info'>Notes...</p>
      </div>
    </div>
  )
}

export default Card;