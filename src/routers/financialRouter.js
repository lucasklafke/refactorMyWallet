import {Router} from "express"
import { validateToken } from "../middlewares/validateToken";
import {getFinancialEvents,postFinancialEvents,sumFinancialEvents} from "../controllers/financialController.js"
import financialEventsSchema from "../schemas/financialEventsSchema.js"
import validateSchemas from "../middlewares/validateSchemas.js"
const financialRouter = Router();

app.post("/financial-events", validateToken,validateSchemas(financialEventsSchema), postFinancialEvents);

app.get("/financial-events", validateToken, getFinancialEvents);

app.get("/financial-events/sum", validateToken, sumFinancialEvents);

export default financialRouter;