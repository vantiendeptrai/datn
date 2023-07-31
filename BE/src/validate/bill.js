import joi from "joi";
import { errorMessages } from "./component/errorMessages";

const billValidate = joi.object({
  id_user: joi.string().required().messages(errorMessages("Id người dùng")),
  id_payment: joi.string().required().messages(errorMessages("Id thanh toán")),
  description: joi.string().required().messages(errorMessages("Mô tả"))
});

export default billValidate;

