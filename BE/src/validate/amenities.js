import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const amenitiesValidate = joi.object({
    name: joi.string().required().messages(errorMessages("Tên tiện nghi")),
});

export default amenitiesValidate;
