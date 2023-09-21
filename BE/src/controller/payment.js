import { PaymentModel } from "../models";
import { PaymentValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const paymentList = await PaymentModel.find();

    if (!paymentList || paymentList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách thanh toán",
      });
    }

    return res.status(200).json({
      message: "Danh sách thanh toán",
      data: paymentList,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const payment = await PaymentModel.findById(req.params.id);

    if (!payment || payment.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin thanh toán",
      });
    }

    return res.status(200).json({
      message: "Thông tin thanh toán",
      data: payment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = PaymentValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await PaymentModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thanh toán thất bại",
      });
    }

    return res.status(200).json({
      message: "Thanh toán thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = PaymentValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await PaymentModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật thanh toán thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật thanh toán thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
