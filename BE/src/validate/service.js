import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const serviceValidate = joi.object({
    name: joi.string().required().messages(errorMessages("Tên dịch vụ")),
    price: joi.number().required().messages(errorMessages("Giá dịch vụ"))
});

export default serviceValidate;
