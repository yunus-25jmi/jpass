import React from "react";

const CardPreview = ({name, setCard})=>{

  const openCard = (e)=>{
    console.log(e.target)
    setCard(true)
  }

  return (
    <div
    onClick={openCard}
      className='preview'>
      <h1 className='preview-title'>{name}</h1>
    </div>
  )
}

export default CardPreview;