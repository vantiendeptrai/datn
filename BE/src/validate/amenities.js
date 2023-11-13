import joi from "joi";

import { validationErrors } from "../utils";

const amenitiesValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên tiện nghi")),
  price: joi.number().required().messages(validationErrors("Gía"))
});

export default amenitiesValidate;
