const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const response = require("./helpers/response");
require("./config/database.config")
const ApiRoutes = require("./routes/api.router")
module.exports = (app)=>{
    app.use(cors());
    app.use(helmet());
    app.use(express.json())
    app.use(response());
    app.use("/api/v1", ApiRoutes);
}