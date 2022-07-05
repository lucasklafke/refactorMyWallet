import financialRepository from "../repositories/financialRepository";
import financialService from "../services/financialService";
export async function postFinancialEvents(req, res) {
  try {

    const { value, type } = req.body;

    await financialService.validateTypes(type)
    await financialService.validateValue(value)

    await financialRepository.insertEvent(user.id, value, type);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getFinancialEvents(req, res) {
        const user = res.locals.user;
  try {

    const events = await financialRepository.getEvents(user)

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function sumFinancialEvents(req, res){
const user = res.locals.user
  try {

    const events = await financialRepository.getEvents(user)

    const sum = await financialService.sumEvents(events)

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
