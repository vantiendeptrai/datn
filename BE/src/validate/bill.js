import joi from "joi";
import { errorMessages } from "./component/errorMessages";

const billValidate = joi.object({
  id_user: joi.string().required().messages(errorMessages("cần nhập id khách sạn")),
  id_payment: joi.string().required().messages(errorMessages("id_payment")),
  description: joi.string().required().messages(errorMessages("cần nhập description"))
});

export default billValidate;

