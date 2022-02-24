import React, {useEffect} from "react";
import WelcomeUser from "./WelcomeUser";
import CreateCard from "./CreateCard";
import CardList from "./CardList";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {updateSites} from '../../redux/sites';
import {switchLoading} from "../../redux/isLoading";
import Edit from "./Edit";
import useWindowDimensions from "../useWindowDimensions";

const URL = 'http://localhost:5432/api'

const Home = ()=>{
  const {hidden, edit} = useSelector(state => state.showCard);
  const {username} = useSelector(state => state.user);
  const {siteName} = useSelector(state => state.card);
  const dispatch = useDispatch();
  const {height, width} = useWindowDimensions();

  const windowSize = (h, w)=> {
    if(h >= 481 && h <= 768){
      return 'home-medium'
    } else if(h >= 769){
      return 'home'
    } else if(h < 480){
      return 'home-small'
    }
  }

  const body = {
    username: username || localStorage.getItem('username'),
    siteName
  }

  // ** use effect function updates cards when refreshed or sites state changes **
  useEffect(()=>{
    dispatch(switchLoading())
      axios.post(`${URL}/getCards`, body)
        .then(res =>{
          dispatch(updateSites(res.data))
          dispatch(switchLoading())
        }).catch(err => console.log(err));
  }, [hidden])


  return (
    <div className={windowSize(height, width)}>
        <section className='home-left'>
          <WelcomeUser />
          <CreateCard />
        </section>
        <CardList/>
      {hidden && <Card />}
      {edit && <Edit />}
    </div>
  )
}

export default Home;