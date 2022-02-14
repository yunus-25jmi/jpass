import React, {useState} from "react";
import Title from "./Title";

const Landing = ()=>{
  const [button, setButton] = useState(false)

  return (
    <div className='landing'>
      {!button && <Title />}
    </div>
  )
}

export default Landing;