import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const hotelValidate = joi.object({
  name: joi.string().required().messages(errorMessages("Tên khách sạn")),
  status: joi
    .string()
    .required()
    .messages(errorMessages("Trạng thái khách sạn")),
  address: joi.string().required().messages(errorMessages("Địa chỉ khách sạn")),
  phone: joi
    .string()
    .required()
    .messages(errorMessages("Số điện thoại khách sạn")),
  email: joi.string().required().messages(errorMessages("Email khách sạn")),
  description: joi
    .string()
    .required()
    .messages(errorMessages("Mô tả khách sạn")),
  amenities_and_facilities: joi.string().required().messages(errorMessages("Tên dịch vụ")),
  images: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        status: joi.string().required().messages(errorMessages("Trạng thái")),
        name: joi.string().required().messages(errorMessages("Tên")),
        uid: joi.string().required().messages(errorMessages("Uid")),
        url: joi.string().required().messages(errorMessages("Đường dẫn")),
      })
    )
    .messages(errorMessages("Ảnh")),
});

export default hotelValidate;
