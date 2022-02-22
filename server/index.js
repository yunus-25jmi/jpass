require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const ctrl = require('./controller')
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json())
app.use(cors())

app.post('/api/users', ctrl.seedUsers);
app.post('/api/User', ctrl.addUser);
app.post('/api/getUser', ctrl.getUser);
app.post('/api/addCard', ctrl.addCard);
app.post('/api/getCards', ctrl.getCards);
app.post('/api/viewCard', ctrl.viewCard)

app.listen(PORT, ()=> console.log(`Running on port ${PORT}`))