import { sendResponse } from "../utils";
import { PaymentModel } from "../models";
import { PaymentValidate } from "../validate";
import { validateMiddleware } from "../middleware";

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

export const getOne = async (req, res) => {
  try {
    const payment = await PaymentModel.findById(req.params.id);

    if (!payment || payment.length === 0) {
      return sendResponse(res, 404, "Không có thông tin thanh toán");
    }

    return sendResponse(res, 200, "Thông tin thanh toán", payment);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin thanh toán"
    );
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, PaymentValidate, async () => {
      const data = await PaymentModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thanh toán thất bại");
      }

      return sendResponse(res, 200, "Thanh toán thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thanh toán");
  }
};

export const update = async (req, res) => {
  try {
    validateMiddleware(req, res, PaymentValidate, async () => {
      const data = await PaymentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!data) {
        return sendResponse(res, 404, "Cập nhật thanh toán thất bại");
      }

      return sendResponse(res, 200, "Cập nhật thanh toán thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật thanh toán");
  }
};
