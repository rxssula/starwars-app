const axios = require("axios");

class DataService {
  static fetchData = async (what, limit, page) => {
    try {
      const res = await axios.get("https://swapi.dev/api/" + what, {
        params: {
          _limit: limit,
          page: page,
        },
      });
      return res.data;
    } catch (e) {
      console.log("error fetching data", e);
    }
  };
}

module.exports = DataService;
