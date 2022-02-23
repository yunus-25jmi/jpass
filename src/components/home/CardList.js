import React, {useState} from "react";
import CardPreview from "./CardPreview";
import {useSelector} from "react-redux";


const CardList = ()=>{
  const {sites} = useSelector(state => state.sites)
  const {isLoading} = useSelector(state => state.isLoading);

  return (
    <section className='home-cards'>
      {/*        ** loading circle animation **         */}
      {isLoading && <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> }

      {/*         **actual card list rendering**       */}
      {sites && sites.map(site => (
        <CardPreview
          name={site.site_name}
          key={site.site_name}
        />
      ))}
    </section>
  )
}

export default CardList;