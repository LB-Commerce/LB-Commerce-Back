import { Router } from "express";
import { createUsersController } from "../controllers/User/users.controller";
import { schemaValidator } from "../middlewares/schema.middlewares";
import { userExistsCreate } from "../middlewares/users.middlewares";
import { userSchemaRequest } from "../schemas/users.schema";

export const userRoutes = Router();
userRoutes.post(
  "/",
  schemaValidator(userSchemaRequest),
  userExistsCreate,
  createUsersController
);
