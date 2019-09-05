const express = require("express");
const cors = require("cors");

const routes = express.Router();

const MiddlewaresAuth = require("./app/middleware/auth");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const TasksController = require("./app/controllers/TasksController");

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(MiddlewaresAuth);

/**
 * Tasks
 */

routes.get("/tasks", TasksController.index);
routes.get("/tasks/:id", TasksController.show);
routes.post("/tasks", TasksController.store);
routes.put("/tasks/:id", TasksController.update);
routes.delete("/tasks/:id", TasksController.destroy);

module.exports = routes;
