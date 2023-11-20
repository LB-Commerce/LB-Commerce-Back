import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { loginSchema } from "../schemas/login.schema";
import { schemaValidator } from "../middlewares/schema.middlewares";

export const loginRoutes = Router();

loginRoutes.post("/", schemaValidator(loginSchema), loginController);
