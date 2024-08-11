const { Router } = require("express");
const usersController = require("../controllers/userController");
const usersRouter = Router();

usersRouter.get("/", usersController.userFunction);

module.exports = usersRouter;
