import express from "express";
import userController from "../modules/users/user.controller.js";
import userRouter from "../modules/users/user.routes.js";
import groupRouter from "../modules/group/group.routes.js";


const router = express.Router();

router.use('/groups', userRouter);
router.use('/users', groupRouter);


export default router;
