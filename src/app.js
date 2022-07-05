import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import "express-async-errors";
import jwt from "jsonwebtoken";
import errorHandlingMiddleware from "./middlewares/errorHandler.js";
import globalRouter from "./routers/globalRouter.js"
const app = express();
app.use(cors());
app.use(express.json());
app.use(globalRouter)
app.use(errorHandlingMiddleware);



export default app;
