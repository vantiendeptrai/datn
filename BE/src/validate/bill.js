<<<<<<< Updated upstream
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
=======
import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const billValidate = joi.object({
  id_user: joi.string().required().messages(errorMessages("cần nhập id khách sạn")),
  id_payment: joi.string().required().messages(errorMessages("id_payment")),
  description: joi.string().required().messages(errorMessages("cần nhập description"))
});

export default billValidate;
>>>>>>> Stashed changes
