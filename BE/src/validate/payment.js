import joi from "joi";

import { validationErrors } from "../utils";

const paymentValidate = joi.object({
  bookingId: joi.string().required().messages(validationErrors('Mã đặt phòng')),
  amount: joi.number().required().messages(validationErrors('Tổng tiền')),
  cardLast4: joi.string().required().messages(validationErrors('Số thẻ')),
  transactionId: joi.string().required().messages(validationErrors('Mã giao dịch')),
  description: joi.string().required().messages(validationErrors('Mô tả thanh toán'))
});

export default paymentValidate;
