import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const roomTypeValidate = joi.object({
    name: joi.string().required().messages(errorMessages("Tên loại phòng")),
});

export default roomTypeValidate;
