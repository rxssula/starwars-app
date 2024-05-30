const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  gender: String,
  birthYear: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
