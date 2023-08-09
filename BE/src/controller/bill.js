import { BillModel } from "../models";
import { BillValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const bill = await BillModel.find();
    if (bill.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Danh sách hóa đơn",
      bill,
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
    if (!bill) {
      return res.status(404).json({
        message: "Không lấy được hóa đơn theo mã",
      });
    }

    return res.status(200).json({
      message: "Thông tin hóa đơn",
      bill,
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
        message: errors,
      });
    }

    const bill = await BillModel.create(req.body);
    if (!bill) {
      return res.status(404).json({
        message: "Không thêm được hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Thêm hóa đơn thành công ",
      Bill,
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
        message: errors,
      });
    }

    const bill = await BillModel.findById(req.params.id);
    if (!bill) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy hóa đơn muốn cập nhật" });
    }

    const updateBill = await Bill.findByIdAndUpdate(bill._id, req.body, {
      new: true,
    });

    return res.status(200).json({
      message: "Cập nhật hóa đơn thành công ",
      updateBill,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const bill = await BillModel.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({
        message: "Không tìm thấy hóa đơn muốn xóa",
      });
    }

    const deleteBill = await BillModel.findByIdAndDelete(bill._id, req.body, {
      new: true,
    });

    return res.status(200).json({
      message: "xóa hóa đơn thành công ",
      deleteBill,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
