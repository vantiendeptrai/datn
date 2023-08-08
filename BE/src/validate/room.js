import joi from "joi";
import { errorValidateMessages } from "../component";

const roomValidate = joi.object({
  roomNumber: joi
    .number()
    .required()
    .messages(errorValidateMessages("Số phòng")),
  roomFloor: joi.number().required().messages(errorValidateMessages("Tầng")),
  image: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        status: joi
          .string()
          .required()
          .messages(errorValidateMessages("Trạng thái ảnh")),
        name: joi
          .string()
          .required()
          .messages(errorValidateMessages("Tên ảnh")),
        uid: joi.string().required().messages(errorValidateMessages("Uid ảnh")),
        url: joi
          .string()
          .required()
          .messages(errorValidateMessages("Đường dẫn ảnh")),
      })
    )
    .messages(errorValidateMessages("Ảnh")),
  price: joi.number().min(0).required().messages(errorValidateMessages("Giá")),
  status: joi.string().required().messages(errorValidateMessages("Trạng Thái")),
  capacity: joi
    .number()
    .min(0)
    .required()
    .messages(errorValidateMessages("Sức chứa")),
  description: joi.string().required().messages(errorValidateMessages("Mô tả")),
});

export default roomValidate;
