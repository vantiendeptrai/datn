import joi from "joi";
import { errorMessages } from "./component/errorMessages";

const roomValidate = joi.object({
  name: joi.string().required().messages(errorMessages("Tên phòng")),
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
  amenities: joi.string().required().messages(errorMessages("Tiện nghi")),
  description: joi.string().required().messages(errorMessages("Mô tả")),
  floor: joi.string().required().messages(errorMessages("Sàn nhà")),
  view: joi.string().required().messages(errorMessages("Xem")),
  serviceFree: joi.string().required().messages(errorMessages("Dịch vụ")),
});

export default roomValidate;
