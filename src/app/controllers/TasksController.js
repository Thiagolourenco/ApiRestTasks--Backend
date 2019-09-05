const Tasks = require("../models/Tasks");

class TasksController {
  async index(req, res) {
    const tasks = await Tasks.find();

    return res.json(tasks);
  }
  async show(req, res) {
    const tasks = await Tasks.findById(req.params.id);

    return res.json(tasks);
  }
  async store(req, res) {
    const tasks = await Tasks.create({ ...req.body, author: req.userId });

    return res.json(tasks);
  }
  async update(req, res) {
    const tasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(tasks);
  }
  async destroy(req, res) {
    const tasks = await Tasks.findByIdAndDelete(req.params.id);

    return res.json(tasks);
  }
}

module.exports = new TasksController();
