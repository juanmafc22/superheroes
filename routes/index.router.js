const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index.controller");

router.get("/", indexController.index);

router.get("/publisher/:nombre", indexController.publisher);



module.exports = router;