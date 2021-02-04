const mongoose = require("mongoose")
const { Schema, model } = mongoose

  // CREATE RULES FOR A FRUIT
const FruitSchema = new Schema({
  name: { type: String, required: true },
  color: String
})

  // CREATE MY FRUIT MANAGER => FRUIT MODEL
const Fruit = model("Fruit", FruitSchema)
module.exports = Fruit