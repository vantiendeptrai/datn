import joi from "joi";
import { errorMessages } from "./component/errorMessages";

const roomValidate = joi.object({
  room_Number: joi.number().required().messages(errorMessages("Số phòng")),
  room_Floor: joi.number().required().messages(errorMessages("Tầng")),
  image: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        status: joi
          .string()
          .required()
          .messages(errorMessages("Trạng thái ảnh")),
        name: joi.string().required().messages(errorMessages("Tên ảnh")),
        uid: joi.string().required().messages(errorMessages("Uid ảnh")),
        url: joi.string().required().messages(errorMessages("Đường dẫn ảnh")),
      })
    )
    .messages(errorMessages("Ảnh")),
  price: joi.number().min(0).required().messages(errorMessages("Giá")),
  status: joi.string().required().messages(errorMessages("Trạng Thái")),
  capacity: joi.number().min(0).required().messages(errorMessages("Sức chứa")),
  description: joi.string().required().messages(errorMessages("Mô tả")),
});

export default roomValidate;
