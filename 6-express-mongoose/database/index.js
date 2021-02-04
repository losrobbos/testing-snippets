const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TEST_users_db"

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log(`Connected to ${MONGODB_URI}`))
.catch(err => console.log("Error on DB connection", err.message))

module.exports = mongoose.connection
