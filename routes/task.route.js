const { getAllTask, createTask, deleteTask } = require("../controller/task.controller");

const taskRoute = require("express").Router();

taskRoute.get("/:id/:status/:page/:limit", getAllTask);

taskRoute.post("/:id", createTask);

taskRoute.delete("/:id", deleteTask)

module.exports = { taskRoute };
