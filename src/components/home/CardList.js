import React from "react";
import CardPreview from "./CardPreview";
import {useSelector} from "react-redux";

const CardList = ()=>{
  const {sites} = useSelector(state => state.sites)
  // console.log(sites)
  return (
    <section className='home-cards'>
      { sites && sites.length && sites[0] && sites.map(site => (
        <CardPreview
          name={site.site_name}
          key={site.site_name}
        />
      ))}
    </section>
  )
}

export default CardList;