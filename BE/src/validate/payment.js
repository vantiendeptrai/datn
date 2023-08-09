import joi from "joi";

import { errorMessages } from "./component/function";

const paymentValidate = joi.object({
  userID: joi.string().optional(),
  serviceId: joi.string().messages(),
  totalPrice: joi.number().required().messages(errorMessages("Tổng giá")),
  method: joi
    .string()
    .required()
    .messages(errorMessages("Phương thức thanh toán")),
  status: joi
    .number()
    .required()
    .messages(errorMessages("Trạng thái thanh toán")),
});

export default paymentValidate;
