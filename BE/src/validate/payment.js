import joi from "joi";

import { validationErrors } from "../utils";

const paymentValidate = joi.object({
  id_user: joi.string().optional(),
  id_service: joi.string().messages(),
  total_price: joi.number().required().messages(validationErrors("Tổng giá")),
  method: joi
    .string()
    .required()
    .messages(validationErrors("Phương thức thanh toán")),
  status: joi
    .number()
    .required()
    .messages(validationErrors("Trạng thái thanh toán")),
});

export default paymentValidate;
