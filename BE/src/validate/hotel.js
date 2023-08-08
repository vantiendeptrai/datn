import joi from "joi";

import { errorValidateMessages } from "../component";

const hotelValidate = joi.object({
  name: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên khách sạn")),
  status: joi
    .string()
    .required()
    .messages(errorValidateMessages("Trạng thái khách sạn")),
  address: joi
    .string()
    .required()
    .messages(errorValidateMessages("Địa chỉ khách sạn")),
  phone: joi
    .string()
    .required()
    .messages(errorValidateMessages("Số điện thoại khách sạn")),
  email: joi
    .string()
    .required()
    .messages(errorValidateMessages("Email khách sạn")),
  description: joi
    .string()
    .required()
    .messages(errorValidateMessages("Mô tả khách sạn")),
  city: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên thành phố")),
  images: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        status: joi
          .string()
          .required()
          .messages(errorValidateMessages("Trạng thái")),
        name: joi.string().required().messages(errorValidateMessages("Tên")),
        uid: joi.string().required().messages(errorValidateMessages("Uid")),
        url: joi
          .string()
          .required()
          .messages(errorValidateMessages("Đường dẫn")),
      })
    )
    .messages(errorValidateMessages("Ảnh")),
});

export default hotelValidate;
