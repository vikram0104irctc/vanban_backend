const { loginUser } = require("../controller/login.controller");

const loginRoute = require("express").Router();

loginRoute.post("/", loginUser);

module.exports = { loginRoute };
