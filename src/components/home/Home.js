import React, {useEffect, useState} from "react";
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
import Menu from "./Menu";
import Media from "react-media";
import {switchSmall} from "../../redux/smallScreen";
import Logout from "./Logout";

const URL = 'http://localhost:5432/api'

const Home = ()=>{
  const {hidden, edit} = useSelector(state => state.showCard);
  const {username} = useSelector(state => state.user);
  const {siteName} = useSelector(state => state.card);
  const dispatch = useDispatch();
  const {small} = useSelector(state => state.smallScreen);

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
    <div className='home'>
      <Media queries={{
        small: "(max-width: 480px)",
        medium: "(min-width: 481px) and (max-width: 768px)",
        large: "(min-width: 769px)"
      }}>
        {matches => (
          <>
            {matches.small && <p>I am small!</p>}
            {matches.medium &&
            <>
              {!small &&
                <Menu />}
              <Logout />
              <CardList/>
              {small &&
              <>
                <section className='home-left'>
                  <WelcomeUser/>
                  <CreateCard/>
                </section>
              </>}
            </>
            }
            {matches.large &&
            <>
              <section className='home-left'>
                <WelcomeUser/>
                <CreateCard/>
              </section>
              <CardList/>
            </>
            }
          </>
        )}
      </Media>
      {hidden && <Card />}
      {edit && <Edit />}
    </div>
  )
}

export default Home;