import joi from "@hapi/joi";
import { validationOptions } from "../../utils/joi";

const create = joi.object({
  publicationId: joi.string().required(),
  content: joi
    .string()
    .required()
    .min(3)
    .max(1000)
});

const update = joi.object({
  id: joi.string().required(),
  content: joi
    .string()
    .min(3)
    .max(140)
    .required()
});

const remove = joi.object({
  id: joi.string().required()
});

export default {
  create: value => create.validateAsync(value, validationOptions),
  update: value => update.validateAsync(value, validationOptions),
  delete: value => remove.validateAsync(value, validationOptions)
};
