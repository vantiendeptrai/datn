import joi from "joi";

import { errorValidateMessages } from "../component";

const roomTypeValidate = joi.object({
  name: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên loại phòng")),
});

export default roomTypeValidate;
