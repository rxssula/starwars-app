const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  gender: String,
  birthYear: String,
});

personSchema.index({ name: "text", gender: "text", birthYear: "text" });

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
