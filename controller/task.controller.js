const { taskModel } = require("../model/task.model");

const getAllTask = async (req, res) => {
  const { id, status, page, limit } = req.params;
  const query = {};
  query.userId = id;
  query.status = status;
  try {
    const data = await taskModel
      .find(query)
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
};

const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const { id } = req.params;
  try {
    taskModel.create({
      userId: id,
      title,
      description,
      status,
      dueDate,
    });
    res.status(201).json({ message: "Task created successfully" });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllTask, createTask, deleteTask };
