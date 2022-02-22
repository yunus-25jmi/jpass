import React, {useState, useEffect} from "react";
import WelcomeUser from "./WelcomeUser";
import CreateCard from "./CreateCard";
import CardList from "./CardList";
import './home.css'
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {updateSites} from '../../redux/sites';

const URL = 'http://localhost:5432/api'

const Home = ()=>{
  const {hidden} = useSelector(state => state.showCard);
  const {username} = useSelector(state => state.user);
  const {siteName} = useSelector(state => state.card);
  const cards = useSelector(state => state.card);
  const sites = useSelector(state => state.sites);
  const dispatch = useDispatch();

  const body = {
    username: username || localStorage.getItem('username'),
    siteName
  }

  // ** use effect funciton updates cards when refreshed or sites state changes **
  useEffect(()=>{
      axios.post(`${URL}/getCards`, body)
        .then(res =>{
          dispatch(updateSites(res.data))
        }).catch(err => console.log(err));
  }, [hidden])


  return (
    <div className='home'>
        <section className='home-left'>
          <WelcomeUser />
          <CreateCard />
        </section>
        <CardList/>
      {hidden && <Card />}
    </div>
  )
}

export default Home;