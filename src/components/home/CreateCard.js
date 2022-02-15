import React, {useState} from "react";

const CreateCard = ()=>{
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
  )
}

export default CreateCard;