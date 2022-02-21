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

  // **Seed file for main database table**
  seedUsers: (req, res)=>{
    sequelize.query(
      `CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(25) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(75) NOT NULL,
            firstname VARCHAR(25) NOT NULL,
            lastname VARCHAR(25) NOT NULL);`
    )
      .then(dbRes=>{
        res.status(200).send(dbRes[0])
      }).catch(err => console.log(err))
  },

  // ** Adding user to main table, creating individual table **
  addUser: async (req, res) =>{
    const { username, password, email, firstname, lastname } = req.body;

    // ** hashing the password using bcrypt **
    // ** checking if user already exists **
    const check = await sequelize.query(
      `SELECT * FROM users WHERE username = '${username}';`
    ).catch(err => console.log(err))
    if(check[1].rowCount !== 0){
      res.status(500).send('Username already exists')
    }else {
      const salt = bcrypt.genSaltSync(10);
      const passHash = bcrypt.hashSync(password, salt);

      // ** Add user into DB after password has been hashed. **
      sequelize.query(
        `INSERT INTO users(username, password, email, firstname, lastname)
            VALUES('${username}', '${passHash}', '${email}','${firstname}', '${lastname}');
            
            CREATE TABLE IF NOT EXISTS ${username}(
            id SERIAL PRIMARY KEY,
            user_id SERIAL REFERENCES users,
            site_name VARCHAR(50),
            site_password VARCHAR(255) NOT NULL,
            site_username VARCHAR(50),
            site_url VARCHAR(100),
            notes VARCHAR(250));`
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

    let user = [];
    await sequelize.query(
      `SELECT * FROM ${username}`
    ).then(dbRes=>{
      user = [...dbRes[0]]
    }).catch(err => console.log(err));

    if(user.find(site => site.site_name === siteName)){
      res.status(500).send('Site name already exists')
    } else {
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
    }
  },
  getCards: (req, res)=>{
    const {siteName, username} = req.body;
    sequelize.query(
      `SELECT site_name FROM ${username}`
    ).then(dbRes =>{
      console.log(dbRes[0])
      res.status(200).send(dbRes[0][0])
    }).catch(err => console.log(err));
  }
}