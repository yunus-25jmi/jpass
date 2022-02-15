require('dotenv')
const {Sequelize} = require("sequelize");
const {CONNECTION_STRING: CS} = process.env;
const sequelize = new Sequelize(CS,{
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = {
  addUser: (req, res)=>{
    const {email, username, password, firstname, lastname} = req.body;
    console.log(req.body)
    sequelize.query(
      `CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(75) NOT NULL);`
    )
      .then(dbRes=>{
        res.status(200).send(dbRes[0])
      }).catch(err => console.log(err))
  }
}