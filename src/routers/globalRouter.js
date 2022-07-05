import {Router} from "express"
import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js"
const globalRouter = Router()

globalRouter.use(authRouter)
globalRouter.use(financialRouter);
export default globalRouter;