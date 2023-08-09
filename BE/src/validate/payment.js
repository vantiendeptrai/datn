import joi from "joi";

import { errorValidateMessages } from "../component";

const paymentValidate = joi.object({
  userID: joi.string().optional(),
  serviceId: joi.string().messages(),
  totalPrice: joi
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
