import joi from "joi";
import { errorValidateMessages } from "../component";

const reviewValidate = joi.object({
  id_user: joi
    .string()
    .required()
    .messages(errorValidateMessages("Id người dùng")),
  rating: joi
    .string()
    .required()
    .messages(errorValidateMessages("Id thanh toán")),
  comment: joi.string().required().messages(errorValidateMessages("comment")),
  like_count: joi
    .string()
    .required()
    .messages(errorValidateMessages("like_count")),
  like_customers: joi
    .string()
    .required()
    .messages(errorValidateMessages("like_customers")),
});

export default reviewValidate;
