import { Router } from "express";
import userController from "./user.controller.js";

const userRouter = Router();

userRouter
  .get("/", userController.getAllUsers)
  .post("/add", userController.createUser)
  .patch("/update/:id", userController.updateUser)
  .delete("/delete/:id", userController.deleteUser);

export default userRouter;
