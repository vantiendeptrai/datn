import joi from "joi";

import { errorValidateMessages } from "../component";

const amenitiesValidate = joi.object({
  name: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên tiện nghi")),
  surcharge: joi.boolean().optional(),
});

export default amenitiesValidate;
