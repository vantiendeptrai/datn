import joi from "joi";

import { errorValidateMessages } from "../component";

const bookingValidate = joi.object({
  id_user: joi
    .string()
    .required()
    .messages(errorValidateMessages("ID khách hàng")),
  Check_in_Date: joi
    .date()
    .required()
    .messages(errorValidateMessages("Ngày nhận phòng")),
  Check_our_Date: joi
    .date()
    .required()
    .messages(errorValidateMessages("Kiểm tra ngày")),
  total_Price: joi
    .number()
    .required()
    .messages(errorValidateMessages("Tổng giá")),
  status: joi
    .string()
    .valid("đang chờ xử lý", "đã xác nhận", "đã hủy bỏ")
    .default("đang chờ xử lý")
    .messages(errorValidateMessages("Trạng thái")),
  id_bill: joi
    .string()
    .required()
    .messages(errorValidateMessages("NHận dạng phương thức thanh toán")),
  id_room: joi
    .string()
    .required()
    .messages(errorValidateMessages("Nhận dạng phòng")),
  cccd: joi
    .number()
    .required()
    .messages(errorValidateMessages("NHập số căn cước công dân của bạn")),
});

export default bookingValidate;
