import express from "express";
import UserController from "../app/controllers/user";
const router = express.Router();

router.get("/find", UserController.findAll);

export default router;
