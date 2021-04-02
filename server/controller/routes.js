const express = require('express');
const router = express.Router();
const {saveData,getData} = require('./userLogics');
router.post("/saveData",saveData)
router.get("/getData",getData)
module.exports = router;