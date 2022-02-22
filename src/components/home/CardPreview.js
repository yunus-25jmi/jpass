import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {switchHidden} from "../../redux/showCard";
import axios from "axios";

const URL = 'http://localhost:5432/api'

const CardPreview = ({name})=>{
  const {originalSiteName} = useSelector(state => state.card)
  const dispatch = useDispatch();
  const {hidden} = useSelector(state =>state.showCard)

  const body = {

  }

  const openCard = async (e)=>{
    e.preventDefault();

    await axios.get(`${URL}/viewCard`, body)
      .then(res => {
        console.log(res.data)
      }).catch()

    dispatch(switchHidden(true))
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