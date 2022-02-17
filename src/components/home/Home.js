import React, {useState} from "react";
import WelcomeUser from "./WelcomeUser";
import CreateCard from "./CreateCard";
import CardList from "./CardList";
import './home.css'
import Card from "./Card";
import { useSelector } from "react-redux";

const Home = ()=>{
  const {hidden} = useSelector(state => state.showCard);

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