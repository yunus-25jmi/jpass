import React, {useState} from "react";
import WelcomeUser from "./WelcomeUser";
import CreateCard from "./CreateCard";
import CardList from "./CardList";
import css from './home.css'
import Card from "./Card";

const Home = ()=>{
  const [card, setCard] = useState(false)

  return (
    <div className='home'>
        <section className='home-left'>
          <WelcomeUser />
          <CreateCard />
        </section>
        <CardList setCard={setCard}/>
      {card && <Card setCard={setCard}/>}
    </div>
  )
}

export default Home;