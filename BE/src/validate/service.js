import joi from "joi";

import { validationErrors } from "../utils";

const serviceValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên dịch vụ")),
  price: joi.number().required().messages(validationErrors("Giá dịch vụ")),
});

export default serviceValidate;
