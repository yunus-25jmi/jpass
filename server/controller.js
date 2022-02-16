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
  seedUsers: (req, res)=>{
    sequelize.query(
      `CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(75) NOT NULL,
            firstname VARCHAR(25) NOT NULL,
            lastname VARCHAR(25) NOT NULL);`
    )
      .then(dbRes=>{
        res.status(200).send(dbRes[0])
      }).catch(err => console.log(err))
  },
  addUser: (req, res) =>{
    console.log(req.body)
    const { username, password, email, firstname, lastname } = req.body;
    sequelize.query(
      `INSERT INTO users(username, password, email, firstname, lastname)
            VALUES('${username}', '${password}', '${email}','${firstname}', '${lastname}');

            CREATE TABLE IF NOT EXISTS ${username}(
            id SERIAL PRIMARY KEY,
            user_id SERIAL REFERENCES users,
            site_name VARCHAR(50));`)
      .then(dbRes=>{
        res.status(200).send(dbRes[0])
      }).catch(err => console.log(err));
  }
}