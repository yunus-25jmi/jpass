import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {switchSmall} from "../../redux/smallScreen";

const Exit = ()=>{
  const dispatch = useDispatch();

  return (
    <div className='exit-btn-container'>
      <FontAwesomeIcon
        onClick={()=>dispatch(switchSmall(false))}
        className='exit-btn'
        icon={faCircleXmark}/>
    </div>
  )
}

export default Exit;