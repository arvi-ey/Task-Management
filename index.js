const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const server = express();
const MongodbConnection = require("./connection/dbconnection")
const taskrouter = require('./routes/route')
const cors = require('cors')



const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
MongodbConnection(DB_URL);


//--> Middle wares
server.use(express.json());
server.use(express.urlencoded({ extended: false }))
server.use(cors());

//-->ALL Routes
server.use(taskrouter);

server.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})