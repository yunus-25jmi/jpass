const axios = require("axios");


axios.post('http://localhost:5432/api/users')
  .then(res => {
    console.log(res.data)
  }).catch(err => console.log(err))