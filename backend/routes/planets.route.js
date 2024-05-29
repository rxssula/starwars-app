const express = require("express");
const getPlanets = require("../controllers/planets.controller");

const router = express.Router();

router.get("/planets", getPlanets);

module.exports = router;
