import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const loginValidate = joi.object({
  email: joi.string().email().required().messages(errorMessages("Tài khoản")),
  password: joi.string().required().min(12).messages(errorMessages("Mật khẩu")),
});

export default loginValidate;
