import joi from 'joi';
import { errorMessages } from "./component/errorMessages";
const BillValidate = joi.object({
  dueDate: joi.string().required().messages(errorMessages("Ngày đáo hạn")),
  totalAmount: joi.number().required().messages(errorMessages("Tổng số tiền")),
  depositAmount: joi.number().required().messages(errorMessages("Số tiền gửi")),
  paymentStatus: joi.string().required().messages(errorMessages("trạng thái hóa đơn")),
  paymentMethod: joi.string().required().messages(errorMessages("phương thức thanh toán")),
  description: joi.string().required().messages(errorMessages("miêu tả")),
})
export default BillValidate