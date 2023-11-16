//develop
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { userRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use(handleAppError);

export default app;
