import joi from "joi";
import { errorMessages } from "./component/errorMessages";

const reviewValidate = joi.object({
  id_user: joi.string().required().messages(errorMessages("Id người dùng")),
  rating: joi.string().required().messages(errorMessages("Id thanh toán")),
  comment: joi.string().required().messages(errorMessages("comment")),
  like_count: joi.string().required().messages(errorMessages("like_count")),
  like_customers: joi.string().required().messages(errorMessages("like_customers")),
  
});

export default reviewValidate;
