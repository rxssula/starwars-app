const mongoose = require("mongoose");

const starshipSchema = new mongoose.Schema({
  name: String,
  consumables: String,
  passengers: String,
});

starshipSchema.index({ name: "text", consumables: "text", passengers: "text" });

const Starship = mongoose.model("Starship", starshipSchema);

module.exports = Starship;
