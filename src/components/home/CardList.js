import React from "react";
import CardPreview from "./CardPreview";

const CardList = ({setCard})=>{

  return (
    <section className='home-cards'>
      <CardPreview setCard={setCard}/>
    </section>
  )
}

export default CardList;