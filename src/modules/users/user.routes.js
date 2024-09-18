import { Router } from "express";
import userController from "./user.controller.js";

const customerRouter = Router();

customerRouter
  .get("/", userController.getAllUsers)
  .post("/add", userController.createUser)
  .patch("/update/:id", userController.updateUser)
  .delete("/delete/:id", userController.deleteUser);

export default customerRouter;
