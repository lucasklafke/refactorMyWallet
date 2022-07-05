import {Router} from "express"
import {signIn, signUp} from "../controllers/authController.js"
import validateSchemas from "../middlewares/validateSchemas.js"
import signupSchema from "../schemas/signupSchema.js"
const authRouter = Router()

app.post("/sign-up", validateSchemas(signupSchema),signUp);

app.post("/sign-in", signIn);
export default authRouter;