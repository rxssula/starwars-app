const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
  name: String,
  classification: String,
  averageLifespan: String,
  language: String,
});

const Species = mongoose.model("Species", speciesSchema);

module.exports = Species;
