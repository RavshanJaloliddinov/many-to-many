import { Router } from "express";
import  groupController from "./group.controller.js"


const studentRouter = Router();

studentRouter
  .get("/", groupController.getAllGroups)
  .post("/add", groupController.addStudentInGroup)
  .post("/add/student/:id", groupController.createGroup)
  .patch("/update/:id", groupController.updateGroup)
  .delete("/delete/:id", groupController.deleteGroup)

export default productRouter;
