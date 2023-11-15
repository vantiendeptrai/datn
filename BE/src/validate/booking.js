import joi from "joi";

import { validationErrors } from "../utils";

const bookingValidate = joi.object({
  check_in: joi.date().required().messages(validationErrors("Ngày nhận phòng")),
  check_out: joi.date().required().messages(validationErrors("Ngày trả phòng")),
  total_price: joi.number().required().messages(validationErrors("Tổng giá")),
  status: joi
    .string()
    .valid("Đang chờ xử lý", "Đã xác nhận", "Đã hủy bỏ")
    .default("Đang chờ xử lý")
    .messages(validationErrors("Trạng thái")),
  id_room: joi.string().required().messages(validationErrors("ID phòng")),
  phone: joi.string().required().messages(validationErrors("Số điện thoại")),
  address: joi.string().required().messages(validationErrors("Địa chỉ")),
  // id_payment_method: joi.string().required().messages(validationErrors("Phương thức thanh toán")),
  // name: joi.string().required().messages(validationErrors('Tên khách hàng'))
});

export default bookingValidate;
