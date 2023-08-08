import joi from "joi";

import { errorValidateMessages } from "../component";

const registerValidate = joi.object({
  name: joi.string().required().messages(errorValidateMessages("Tên")),
  email: joi
    .string()
    .email()
    .required()
    .messages(errorValidateMessages("Email")),
  password: joi
    .string()
    .required()
    .min(12)
    .messages(errorValidateMessages("Mật khẩu")),
  confirmPassword: joi
    .string()
    .valid(joi.ref("password"))
    .required()
    .messages(errorValidateMessages("Xác nhận mật khẩu")),
});

export default registerValidate;
