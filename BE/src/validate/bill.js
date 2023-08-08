import joi from "joi";

import { errorValidateMessages } from "../component";

const billValidate = joi.object({
  id_user: joi
    .string()
    .required()
    .messages(errorValidateMessages("Id người dùng")),
  id_payment: joi
    .string()
    .required()
    .messages(errorValidateMessages("Id thanh toán")),
  description: joi.string().required().messages(errorValidateMessages("Mô tả")),
});

export default billValidate;
