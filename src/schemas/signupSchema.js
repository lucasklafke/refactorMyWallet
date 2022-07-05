import joi from "joi"

const signupSchema = joi.object({
  name: joi.required(),
  email: joi.required(),
  password: joi.required()
});

export default signupSchema;