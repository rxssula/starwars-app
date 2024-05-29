const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  name: String,
  gravity: String,
  climate: String,
  population: String,
});

const Planet = mongoose.model("Planet", planetSchema);

module.exports = Planet;
