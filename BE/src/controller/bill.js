import { BillModel } from "../models";
import { BillValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const billList = await BillModel.find();

    if (!billList || billList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Danh sách hóa đơn",
      data: billList,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const bill = await BillModel.findById(req.params.id);

    if (!bill || bill.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Thông tin hóa đơn",
      data: bill,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = BillValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await BillModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Tạo hóa đơn thất bại",
      });
    }

    return res.status(200).json({
      message: "Tạo hóa đơn thành công",
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
    const { error } = BillValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await BillModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật hóa đơn thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật hóa đơn thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
