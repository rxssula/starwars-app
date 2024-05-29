const axios = require("axios");

const getPlanets = async (req, res) => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/planets");
    console.log(data.results);
    res.send("nice");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = getPlanets;
