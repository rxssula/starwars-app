const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  name: String,
  gravity: String,
  climate: String,
  population: String,
});

planetSchema.index({
  name: "text",
  gravity: "text",
  climate: "text",
  population: "text",
});

const Planet = mongoose.model("Planet", planetSchema);

module.exports = Planet;
