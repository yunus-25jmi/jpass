require('dotenv')
const {Sequelize} = require("sequelize");
const {CONNECTION_STRING: CS} = process.env;
const bcrypt = require('bcrypt');
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
  // Seed file for main database table
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
  // Adding user to main table, creating individual table
  addUser: async (req, res) =>{
    console.log(req.body)
    const { username, password, email, firstname, lastname } = req.body;

    // hashing the password using bcrypt********
    const check = await sequelize.query(
      `SELECT * FROM users WHERE username = '${username}';`
    ).catch(err => console.log(err))
    if(check[1].rowCount !== 0){
      res.status(500).send('Username already exists')
    }else {
      const salt = bcrypt.genSaltSync(10);
      const passHash = bcrypt.hashSync(password, salt);

      // Add user into DB after password has been hashed.*******
      sequelize.query(
        `INSERT INTO users(username, password, email, firstname, lastname)
            VALUES('${username}', '${passHash}', '${email}','${firstname}', '${lastname}');

            CREATE TABLE IF NOT EXISTS ${username}(
            id SERIAL PRIMARY KEY,
            user_id SERIAL REFERENCES users,
            site_name VARCHAR(50));`
      ).catch(err => console.log(err));

      const userInfo = await sequelize.query(
        `SELECT username FROM users WHERE username = '${username}'`
      ).catch(err => console.log(err))
      res.status(200).send(userInfo);
    }
  },
  getUser: (req, res)=>{
    const {username, password} = req.body;
    sequelize.query(
      `SELECT * FROM users WHERE username = '${username}'`
    ).then(dbRes =>{
      const dbPass = dbRes[0][0].password
      bcrypt.compare(password, dbPass, function (err, result){
        console.log(result)
        res.status(200).send(result)
      })
    })
  },
  getInfo: (req, res)=>{
    const {username} = req.body;
    sequelize.query(
      `SELECT * FROM users WHERE username = '${username}'`
    ).then(dbRes =>{
      res.status(200).send(dbRes[0][0])
    })
  },
  addCard: async (req, res) =>{
    const {username, notes, siteName, siteUrl, siteUsername, userId, sitePassword} = req.body;

    await sequelize.query(
      `SELECT * FROM users WHERE username = '${username}';`
    ).catch(err => console.log(err))

    await sequelize.query(
      `INSERT INTO ${username} (user_id, site_name)
           VALUES('${userId}', '${siteName}');`
    ).catch(err => console.log(err))

    await sequelize.query(
      `CREATE TABLE IF NOT EXISTS ${username}${siteName}(
            id SERIAL PRIMARY KEY,
            user_id SERIAL REFERENCES users,
            site_name VARCHAR(75),
            password VARCHAR(255) NOT NULL,
            site_username VARCHAR(50),
            site_url VARCHAR(100),
            notes VARCHAR(250));`
    ).catch(err => console.log(err))

    await sequelize.query(
      `INSERT INTO ${username}${siteName}(user_id, site_name, password, site_username, site_url, notes)
           VALUES('${userId}', '${siteName}', '${sitePassword}', '${siteUsername}','${siteUrl}', '${notes}');`
    ).catch(err => console.log(err));

    await sequelize.query(
      `SELECT * FROM ${username}${siteName}`
    ).then(dbRes =>{
      console.log(dbRes[0][0])
      res.status(200).send(dbRes[0][0])
    }).catch(err => console.log(err));
  }
}