<<<<<<< Updated upstream
import Bill from "../models/bill"
import { BillValidate } from "../validate"

export const getAll = async (req, res) => {
  try {
    const bill = await Bill.find()
    if (bill.length === 0) {
      return res.status(401).json({
        message: "không có dữ liệu gì"
      })
    }
    return res.status(201).json({
      message: "Tất cả sản phẩm:", bill
    })
  } catch (error) {
    return res.status(401).json({
      message: "đã có lỗi xảy ra"
    })
  }
}


export const getOne = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id)
=======
import Bill from "../models/bill";

import { billValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const bill = await Bill.find();
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
    const bill = await Bill.findById(req.params.id);
>>>>>>> Stashed changes
    if (!bill) {
      return res.status(404).json({
        message: "Không lấy được hóa đơn theo mã",
      });
    }

<<<<<<< Updated upstream
    return res.status(201).json({
      message: "hóa đơn theo mã: ", bill
    })

  } catch (error) {
    return res.status(401).json({
      message: "đã có lỗi xảy ra"
    })
  }
}


export const create = async (req, res) => {
  try {
    const { error } = BillValidate.validate(req.body, {
=======
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
    const { error } = billValidate.validate(req.body, {
>>>>>>> Stashed changes
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
    const bill = await Bill.create(req.body);
    if (!bill) {
      return res.status(404).json({
        message: "Không thêm được hóa đơn",
      });
    }
    return res.status(200).json({
      message: "Thêm hóa đơn thành công ",
<<<<<<< Updated upstream
      bill,
=======
      Bill,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    const { error } = BillValidate.validate(req.body, {
=======
    const { error } = billValidate.validate(req.body, {
>>>>>>> Stashed changes
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy hóa đơn muốn cập nhật" });
    }

<<<<<<< Updated upstream
    const billUpdate = await Bill.findByIdAndUpdate(bill._id, req.body, {
=======
    const updateBill = await Bill.findByIdAndUpdate(bill._id, req.body, {
>>>>>>> Stashed changes
      new: true,
    });
    return res.status(200).json({
      message: "Cập nhật hóa đơn thành công ",
<<<<<<< Updated upstream
      bill,
=======
      updateBill,
>>>>>>> Stashed changes
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
<<<<<<< Updated upstream
      message: "Đã có lỗi xảy ra không thể cập nhật hóa đơn",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy hóa đơn muốn xóa" });
    }

    const billRemove = await Bill.findByIdAndDelete(bill._id,);
    return res.status(200).json({
      message: "xóa hóa đơn thành công ",
      billRemove,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      message: "Đã có lỗi xảy ra không thể xóa hóa đơn",
    });
  }
}
=======
      message: "Đã có lỗi xảy ra",
    });
  }
};
>>>>>>> Stashed changes
