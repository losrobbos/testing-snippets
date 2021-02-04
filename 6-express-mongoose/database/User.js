const mongoose = require("mongoose")
const { Schema, model } = mongoose

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'Standard', enum: ['Standard', 'Admin'] },
  userName: String,
})

const User = model('User', UserSchema)

module.exports = User