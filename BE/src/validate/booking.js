import joi from "joi";

import { validationErrors } from "../utils";

const bookingValidate = joi.object({
  id_user: joi.string().required().messages(validationErrors("ID khách hàng")),
  check_in: joi.date().required().messages(validationErrors("Ngày nhận phòng")),
  check_out: joi.date().required().messages(validationErrors("Ngày trả phòng")),
  total_price: joi.number().required().messages(validationErrors("Tổng giá")),
  status: joi
    .string()
    .valid("Đang chờ xử lý", "Đã xác nhận", "Đã hủy bỏ")
    .default("Đang chờ xử lý")
    .messages(validationErrors("Trạng thái")),
  id_bill: joi
    .string()
    .required()
    .messages(validationErrors("Nhận dạng phương thức thanh toán")),
  id_room: joi.string().required().messages(validationErrors("ID phòng")),
  passport: joi
    .number()
    .required()
    .messages(validationErrors("Nhập số căn cước công dân của bạn")),
});

export default bookingValidate;
