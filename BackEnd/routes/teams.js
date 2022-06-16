const express = require("express");
const router = express.Router();
const PrevTeam=require("../models/PrevTeam")
const ActiveTeam=require("../models/ActiveTeam")
const { body, validationResult } = require("express-validator");

module.exports=router