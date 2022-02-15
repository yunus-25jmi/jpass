import React from "react";
import CardPreview from "./CardPreview";

const CardList = ({setCard})=>{

  return (
    <section className='home-cards'>
      <CardPreview name={'google'} setCard={setCard}/>
      <CardPreview name={'robinhood'}/>
      <CardPreview name={'linkedin'}/>
      <CardPreview name={'docs'}/>
      <CardPreview name={'github'}/>
      <CardPreview name={'email'}/>
      <CardPreview name={'CC'}/>
      <CardPreview name={'youtube'}/>
    </section>
  )
}

export default CardList;