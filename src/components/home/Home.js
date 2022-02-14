import React, {useState} from "react";
import css from './home.css';

const Home = ()=>{
  const [siteName, setSiteName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [notes, setNotes] = useState('')
  const [input, setInput] = useState(null)

  const handleName = (e)=> setSiteName(e.target.value);
  const handleUsername = (e)=> setUsername(e.target.value);
  const handlePassword = (e)=> setPassword(e.target.value);
  const handleNotes = (e)=> setNotes(e.target.value);
  const handleUrl = (e)=> setSiteUrl(e.target.value);

  return (
    <div className='home'>
      <section className='home-left'>
        <div className='home-welcome'>
          <h1 className='home-welcome-title'>Welcome user</h1>
        </div>
        <div className='create-container'>
          <h1 className='create-card-title'>Create New Card</h1>
          <form className='create-form'>
            <input
              className='create-input'
              type='text'
              placeholder='Site Name'
              onChange={handleName}/>
            <input
              className='create-input'
              type='text'
              placeholder='username'
              onChange={handleUsername}/>
            <input
              className='create-input'
              type='password'
              placeholder='Password'
              onChange={handlePassword}/>
            <input
              className='create-input'
              type='text'
              placeholder='Site Name'
              onChange={handleUrl}/>
            <textarea
              className='create-input notes'
              placeholder='Notes...'
              onChange={handleNotes}/>
          </form>
        </div>
      </section>
      <section className='home-cards'>
        <div className='home-cards-header'>
          <h1 className='home-cards-title'>Cards</h1>
        </div>
        <h2>card one</h2>
        <h2>card two</h2>
        <h2>card three...</h2>
      </section>
    </div>
  )
}

export default Home;