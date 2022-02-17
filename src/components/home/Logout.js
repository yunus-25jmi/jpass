import React from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {switchSignupType} from "../../redux/signup";
import {switchLoginType} from "../../redux/login";
import {revert} from '../../redux/user';

const Logout = ()=>{
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogout=()=>{
    dispatch(switchLoginType(false));
    dispatch(switchSignupType(false));
    dispatch(revert());
    nav('/')
  }

  return (
      <button
        onClick={handleLogout}
        className='logout-btn'>Logout</button>
  )
}

export default Logout;