import joi from "joi";

import { validationErrors } from "../utils";

const billValidate = joi.object({
  id_booking: joi.string().required().messages(validationErrors("Id Booking chưa nhập")),
  description: joi.string().required().messages(validationErrors("Mô tả")),
});

export default billValidate;
