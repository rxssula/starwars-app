const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
// const DataService = require("./network/DataService");
// const planetsRoutes = require("./routes/planets.route");
const connectMongoDB = require("./db/connectMongoDB");
const Planet = require("./models/planet.model");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/fetch-and-store", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/planets/?page=5");
    const apiData = response.data.results;

    const savedData = await Promise.all(
      apiData.map(async (item) => {
        const newData = new Planet({
          name: item.name,
          gravity: item.gravity,
          climate: item.climate,
          population: item.population,
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

app.listen(8000, () => {
  console.log("Sever started on port 8000");
  connectMongoDB();
});
