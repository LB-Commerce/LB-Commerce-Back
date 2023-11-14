//develop
import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleAppError } from "./middlewares/handleAppError.middleware"

const app = express()
app.use(express.json())


app.use(handleAppError)

export default app;