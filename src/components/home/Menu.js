import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {switchSmall} from "../../redux/smallScreen";

const Menu = ()=>{
  const dispatch = useDispatch();

  return (
    <div className='menu-btn-container'>
      <FontAwesomeIcon
        onClick={()=>dispatch(switchSmall(true))}
        className='menu-btn'
        icon={faCirclePlus}/>
    </div>
  )
}

export default Menu;