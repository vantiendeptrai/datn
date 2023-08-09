import joi from "joi";
import { errorValidateMessages } from "../component";

const reviewValidate = joi.object({
  id_user: joi
    .string()
    .required()
    .messages(errorValidateMessages("Id người dùng")),
  rating: joi.string().required().messages(errorValidateMessages("Đánh giá")),
  comment: joi.string().required().messages(errorValidateMessages("BÌnh luận")),
});

export default reviewValidate;
