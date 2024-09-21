const { registerUser } = require("../controller/register.controller");


const registerRoute = require("express").Router();

registerRoute.post("/", registerUser)

module.exports = { registerRoute };