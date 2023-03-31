import { Router } from "express";
import { signUp } from "../controllers/userControllers.js";
const userRoutes = Router();

userRoutes.post("/signup", signUp);

export default userRoutes;
