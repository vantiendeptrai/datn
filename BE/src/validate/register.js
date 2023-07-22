import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const registerValidate = joi.object({
  name: joi.string().required().messages(errorMessages("Tên")),
  email: joi.string().email().required().messages(errorMessages("Email")),
  password: joi.string().required().min(12).messages(errorMessages("Mật khẩu")),
});

export default registerValidate;
