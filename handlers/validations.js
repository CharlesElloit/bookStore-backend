const Joi = require("joi");

exports.registrationValidation = data => {
  const registrationSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .min(3)
      .max(30)
      .trim()
      .strip(),
    lastName: Joi.string()
      .required()
      .min(3)
      .max(30)
      .trim()
      .strip(),
    email: Joi.string()
      .required()
      .email()
      .trim()
      .strip(),
    password: Joi.string()
      .required()
      .min(6)
      .max(30)
      .pattern(new RegExp(/^[a-zA-Z0-9!@#$%&*]{3,25}$/))
  });

  return registrationSchema.validate(data);
};

exports.loginValidation = data => {
  const loginSchema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .trim()
      .strip(),
    password: Joi.string()
      .required()
      .min(6)
      .max(30)
      .pattern(new RegExp(/^[a-zA-Z0-9!@#$%&*]{3,25}$/))
  });

  return loginSchema.validate(data);
};
