import React from "react";
import CardPreview from "./CardPreview";
import {useSelector} from "react-redux";

const CardList = ()=>{
  const {sites} = useSelector(state => state.sites)

  console.log(sites[0])
  return (
    <section className='home-cards'>
      { sites &&
        sites[0].map(site => (
        <CardPreview
          name={site.site_name}
          key={site.site_name}
        />
      ))}
    </section>
  )
}

export default CardList;