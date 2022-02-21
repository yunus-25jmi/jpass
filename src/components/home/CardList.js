import React from "react";
import CardPreview from "./CardPreview";
import {useSelector} from "react-redux";

const CardList = ()=>{
  const {cardNum} = useSelector(state => state.card);

  const cardAmount = (num)=>{
    while(num > 0){
      return (
        <CardPreview />
      )
    }
  }

  return (
    <section className='home-cards'>
      {cardAmount(cardNum)}
    </section>
  )
}

export default CardList;