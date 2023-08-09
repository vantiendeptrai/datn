import joi from "joi";

import { errorValidateMessages } from "../component";

const serviceValidate = joi.object({
  name: joi.string().required().messages(errorValidateMessages("Tên dịch vụ")),
  price: joi.number().required().messages(errorValidateMessages("Giá dịch vụ")),
});

export default serviceValidate;
