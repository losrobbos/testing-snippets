const express = require('express');
const app = express();
const User = require("./database/User") // load User model
const dbConnection = require("./database"); // connect to DB

app.use( express.json() )

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.get('/db/close', (req, res) => {
  dbConnection.close()
  res.json({ success: true })
})

// User fields: email, password, role, userName
app.get('/users/seed', async (req, res) => {

  await User.deleteMany()

  let usersToSeed = [
    { email: "user@testers.com", password: "user" },
    { email: "admin@testers.com", password: "admin", role: 'Admin' },
  ]

  let usersSeededDb = await User.create(usersToSeed)

  res.json({ 
    message: "Users seed successfully",
    users: usersSeededDb
  })

})

app.get('/users', async (req, res) => {
  let users = await User.find() // get all users
  res.json(users)
})

  // CREATE USERS
app.post('/users', async (req, res, next) => {
  try {
    let userNew = await User.create(req.body)
    res.json({ user: userNew })
  }
  catch(err) {
    err.status = 400 // => frontend provided wrong data
    next(err)
  }
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message })
})

module.exports = app
