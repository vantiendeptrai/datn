import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const bookingValidate = joi.object({
  id_user: joi.string().required().messages(errorMessages("ID khách hàng")),
  Check_in_Date: joi
    .date()
    .required()
    .messages(errorMessages("Ngày nhận phòng")),
  Check_our_Date: joi
    .date()
    .required()
    .messages(errorMessages("Kiểm tra ngày")),
  total_Price: joi.number().required().messages(errorMessages("Tổng giá")),
  status: joi
    .string()
    .valid("đang chờ xử lý", "đã xác nhận", "đã hủy bỏ")
    .default("đang chờ xử lý")
    .messages(errorMessages("Trạng thái")),
  id_bill: joi
    .string()
    .required()
    .messages(errorMessages("NHận dạng phương thức thanh toán")),
  id_room: joi.string().required().messages(errorMessages("Nhận dạng phòng")),
  cccd: joi
    .number()
    .required()
    .messages(errorMessages("NHập số căn cước công dân của bạn")),
});

export default bookingValidate;
