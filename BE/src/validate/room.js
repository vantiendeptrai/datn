import joi from "joi";

import { validationErrors } from "../utils";

const roomValidate = joi.object({
  room_number: joi.number().required().messages(validationErrors("Số phòng")),
  room_floor: joi.number().required().messages(validationErrors("Tầng")),
  images: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        url: joi
          .string()
          .required()
          .messages(validationErrors("Đường dẫn ảnh")),
      })
    )
    .messages(validationErrors("Ảnh")),
  capacity: joi
    .number()
    .min(1)
    .required()
    .messages(validationErrors("Sức chứa")),
  price: joi.number().min(0).required().messages(validationErrors("Giá phòng")),
  status: joi
    .string()
    .required()
    .messages(validationErrors("Trạng Thái phòng")),
  description: joi
    .string()
    .required()
    .messages(validationErrors("Mô tả phòng")),
  id_amenities: joi
    .array()
    .min(1)
    .required()
    .messages(validationErrors("Tiện nghi phòng")),
  id_hotel: joi.string().required().messages(validationErrors("Id khách sạn")),
  id_roomType: joi
    .string()
    .required()
    .messages(validationErrors("Id loại phòng")),
});

export default roomValidate;
