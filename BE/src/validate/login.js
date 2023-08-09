import joi from "joi";

import { errorValidateMessages } from "../component";

const loginValidate = joi.object({
  email: joi
    .string()
    .email()
    .required()
    .messages(errorValidateMessages("Tài khoản")),
  password: joi
    .string()
    .required()
    .min(12)
    .messages(errorValidateMessages("Mật khẩu")),
});

export default loginValidate;
