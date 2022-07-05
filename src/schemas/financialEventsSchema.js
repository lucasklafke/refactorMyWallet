import joi from "joi"

const financialEventsSchema = joi.object({
  value: joi.required(),
  type: joi.required()
}); 

export default financialEventsSchema