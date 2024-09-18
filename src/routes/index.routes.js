import express from "express";
import userController from "../modules/users/user.controller.js";
import groupController  from "../modules/group/group.controller.js";

const router = express.Router();

router.use('/groups', groupController);
router.use('/users', userController);


export default router;
