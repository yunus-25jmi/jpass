import React from "react";

const CardPreview = (props)=>{

  return (
    <div className='preview'>
      <h1 className='preview-title'>{props.name}</h1>
    </div>
  )
}

export default CardPreview;