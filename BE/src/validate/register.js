import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const registerValidate = joi.object({
  name: joi.string().required().messages(errorMessages("Tên")),
  email: joi.string().email().required().messages(errorMessages("Email")),
  password: joi.string().required().min(12).messages(errorMessages("Mật khẩu")),
  confirmPassword: joi
    .string()
    .valid(joi.ref("password"))
    .required()
    .messages(errorMessages("Xác nhận mật khẩu")),
});

export default registerValidate;
