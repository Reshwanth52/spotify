const express = require('express')
const songRoute=express.Router();


songRoute.get("/")

songRoute.get(`/:songName`);


module.exports={songRoute}