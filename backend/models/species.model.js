const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
  name: String,
  classification: String,
  averageLifespan: String,
  language: String,
});

speciesSchema.index({
  name: "text",
  classification: "text",
  averageLifespan: "text",
  language: "text",
});

const Species = mongoose.model("Species", speciesSchema);

module.exports = Species;
