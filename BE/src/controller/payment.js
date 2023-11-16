import { sendResponse } from "../utils";
import { PaymentModel } from "../models";
import { PaymentValidate } from "../validate";
import { validateMiddleware } from "../middleware";
import stripe from 'stripe';
import dotenv from "dotenv";
dotenv.config()
// Khởi tạo đối tượng Stripe với khóa API của bạn
const stripeClient = stripe(process.env.SECRET_KEY);
export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, PaymentValidate, async () => {
      const { amount, cardToken, description } = req.body;
      // Tạo thanh toán sử dụng Stripe
      const paymentIntent = await stripeClient.paymentIntents.create({
        amount,
        currency: 'vnd', // Đổi thành đơn vị tiền tệ mong muốn
        payment_method: cardToken,
        description,
      });

      // Nếu thanh toán thành công, lưu thông tin thanh toán vào MongoDB
      const payment = await PaymentModel.create({
        amount,
        cardLast4: paymentIntent.payment_method_details.card.last4,
        transactionId: paymentIntent.id,
        description,
        ...req.body
      });
      if (!payment) {
        return sendResponse(res, 404, 'Thanh toán không thành công')
      }
      return sendResponse(res, 200, 'Thanh toán thành công', payment)

    })
  } catch (error) {

    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thanh toán");
  }
};

export const getAll = async (req, res) => {
  try {
    const paymentList = await PaymentModel.find();

    if (!paymentList || paymentList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách thanh toán");
    }

    return sendResponse(res, 200, "Danh sách thanh toán", paymentList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách thanh toán"
    );
  }
};

// export const getOne = async (req, res) => {
//   try {
//     const payment = await PaymentModel.findById(req.params.id);

//     if (!payment || payment.length === 0) {
//       return sendResponse(res, 404, "Không có thông tin thanh toán");
//     }

//     return sendResponse(res, 200, "Thông tin thanh toán", payment);
//   } catch (error) {
//     console.error(error);

//     return sendResponse(
//       res,
//       500,
//       "Đã có lỗi xảy ra khi lấy thông tin thanh toán"
//     );
//   }
// };



// export const update = async (req, res) => {
//   try {
//     validateMiddleware(req, res, PaymentValidate, async () => {
//       const data = await PaymentModel.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//           new: true,
//         }
//       );

//       if (!data) {
//         return sendResponse(res, 404, "Cập nhật thanh toán thất bại");
//       }

//       return sendResponse(res, 200, "Cập nhật thanh toán thành công", data);
//     });
//   } catch (error) {
//     console.log(error);

//     return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật thanh toán");
//   }
// };
