const express = require("express");
const router = express.Router();

const { inventry } = require("../controllers/registerControllers");

router.post("/inventry", inventry);

module.exports = router;
