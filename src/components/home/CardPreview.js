import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";

const CardPreview = ()=>{
  const {siteName} = useSelector(state => state.card)
  const dispatch = useDispatch();
  const {hidden} = useSelector(state =>state.showCard)

  const openCard = (e)=>{
    dispatch(switchHidden(true))
    console.log(hidden)
  }

  return (
    <div
      onClick={openCard}
      className='preview'>
      <h1 className='preview-title'>{siteName}</h1>
    </div>
  )
}

export default CardPreview;