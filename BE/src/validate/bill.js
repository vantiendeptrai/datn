import joi from "joi";

import { validationErrors } from "../utils";

const billValidate = joi.object({
  id_user: joi.string().required().messages(validationErrors("Id người dùng")),
  id_payment: joi
    .string()
    .required()
    .messages(validationErrors("Id thanh toán")),
  description: joi.string().required().messages(validationErrors("Mô tả")),
});

export default billValidate;
