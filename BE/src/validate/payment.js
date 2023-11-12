import joi from "joi";

import { validationErrors } from "../utils";

const paymentValidate = joi.object({
  paymentMethod: joi.string().required().messages(validationErrors('Phương thức thanh toán'))
});

export default paymentValidate;
