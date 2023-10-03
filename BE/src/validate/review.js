import joi from "joi";

import { validationErrors } from "../utils";

const reviewValidate = joi.object({
  id_user: joi.string().required().messages(validationErrors("Id người dùng")),
  rating: joi.string().required().messages(validationErrors("Đánh giá")),
  comment: joi.string().required().messages(validationErrors("BÌnh luận")),
});

export default reviewValidate;
