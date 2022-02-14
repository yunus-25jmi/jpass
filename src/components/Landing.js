import React, {useState} from "react";
import Title from "./Title";
import Login from "./Login";
import SignUp from "./SignUp";

const Landing = ()=>{
  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(false)

  return (
    <div className='landing'>
      {!login && !signUp && <Title setLogin={setLogin} setSignUp={setSignUp}/>}
      {login && <Login />}
      {signUp && <SignUp />}
    </div>
  )
}

export default Landing;