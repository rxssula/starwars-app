const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const path = require("path");

const connectMongoDB = require("./db/connectMongoDB");
const Person = require("./models/person.model");
const Planet = require("./models/planet.model");
const Species = require("./models/species.model");
const Starship = require("./models/starship.model");

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/fetch-and-store", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/starships/?page=4");
    const apiData = response.data.results;

    const savedData = await Promise.all(
      apiData.map(async (item) => {
        const newData = new Starship({
          name: item.name,
          consumables: item.consumables,
          passengers: item.passengers,
        });
        return await newData.save();
      })
    );
    res.status(201).json(savedData);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/planets", async (req, res) => {
  try {
    const data = await Planet.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/people", async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/species", async (req, res) => {
  try {
    const data = await Species.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/starships", async (req, res) => {
  try {
    const data = await Starship.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Planet.find({ $text: { $search: query } });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}`);
  connectMongoDB();
});
