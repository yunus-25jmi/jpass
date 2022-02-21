import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";

const CardPreview = ()=>{
  const {originalSiteName} = useSelector(state => state.card)
  const dispatch = useDispatch();
  const {hidden} = useSelector(state =>state.showCard)

  const openCard = (e)=>{
    e.preventDefault();
    dispatch(switchHidden(true))
  }

  return (
    <div
      onClick={openCard}
      className='preview'>
      <h1 className='preview-title'>{originalSiteName}</h1>
    </div>
  )
}

export default CardPreview;