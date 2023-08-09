import joi from "joi";

import { errorValidateMessages } from "../component";

const hotelValidate = joi.object({
  name: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên khách sạn")),
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
    .messages(errorValidateMessages("Ảnh khách sạn")),
  address: joi
    .string()
    .required()
    .messages(errorValidateMessages("Địa chỉ khách sạn")),
  phone: joi
    .string()
    .required()
    .pattern(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/)
    .messages(errorValidateMessages("Số điện thoại khách sạn")),
  status: joi
    .string()
    .required()
    .messages(errorValidateMessages("Trạng thái khách sạn")),
  email: joi
    .string()
    .required()
    .messages(errorValidateMessages("Email khách sạn")),
  description: joi
    .string()
    .required()
    .messages(errorValidateMessages("Mô tả khách sạn")),
  id_amenities: joi
    .array()
    .min(1)
    .required()
    .messages(errorValidateMessages("Tiện nghi khách sạn")),
  city: joi
    .string()
    .required()
    .messages(errorValidateMessages("Tên thành phố khách sạn")),
});

export default hotelValidate;
