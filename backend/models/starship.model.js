const mongoose = require("mongoose");

const starshipSchema = new mongoose.Schema({
  name: String,
  consumables: String,
  passengers: String,
});

const Starship = mongoose.model("Starship", starshipSchema);

module.exports = Starship;
