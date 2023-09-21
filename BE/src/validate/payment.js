import joi from "joi";

import { errorValidateMessages } from "../component";

const paymentValidate = joi.object({
  id_user: joi.string().optional(),
  id_service: joi.string().messages(),
  total_price: joi
    .number()
    .required()
    .messages(errorValidateMessages("Tổng giá")),
  method: joi
    .string()
    .required()
    .messages(errorValidateMessages("Phương thức thanh toán")),
  status: joi
    .number()
    .required()
    .messages(errorValidateMessages("Trạng thái thanh toán")),
});

export default paymentValidate;
