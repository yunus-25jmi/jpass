import React from "react";
import Title from "./Title";
import Login from "./Login";
import SignUp from "./SignUp";
import {useSelector} from "react-redux";

const Landing = ()=>{
  const {signUp} = useSelector(state => state.signup)
  const {login} = useSelector(state => state.login)
  const {isLoading} = useSelector(state => state.isLoading);

  return (
    <div className='landing'>
      {/*       **Loading rings**       */}
      {isLoading && <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> }

      {/*         ** Rendering component**        */}
      {!isLoading && !login && !signUp && <Title />}
      {!isLoading && login && <Login />}
      {!isLoading && signUp && <SignUp />}
    </div>
  )
}

export default Landing;