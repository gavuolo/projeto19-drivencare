import { Router } from "express";
import { signUp } from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { signUpSchema } from "../schemas/userSchemas.js";
const userRoutes = Router();

userRoutes.post("/signup", validateSchema(signUpSchema), signUp);

export default userRoutes;
