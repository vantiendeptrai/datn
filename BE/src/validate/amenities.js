import joi from "joi";

import { validationErrors } from "../utils";

const amenitiesValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên tiện nghi")),
  surcharge: joi.boolean().optional(),
});

export default amenitiesValidate;
