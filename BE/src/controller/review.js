import { ReviewModel } from "../models";
import { ReviewValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const review = await ReviewModel.find();
    if (review.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Danh sách hóa đơn",
      review,
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
    const review = await ReviewModel.findById(req.params.id);
    if (!review) {
      return res.status(404).json({
        message: "Không lấy được hóa đơn theo mã",
      });
    }

    return res.status(200).json({
      message: "Thông tin hóa đơn",
      review,
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
    const { error } = ReviewValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const review = await ReviewModel.create(req.body);
    if (!review) {
      return res.status(404).json({
        message: "Không thêm được hóa đơn",
      });
    }

    return res.status(200).json({
      message: "Thêm hóa đơn thành công ",
      review,
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
    const { error } = ReviewValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const review = await ReviewModel.findById(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy hóa đơn muốn cập nhật" });
    }

    const updateReview = await ReviewModel.findByIdAndUpdate(
      review._id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Cập nhật hóa đơn thành công ",
      updateReview,
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
    const review = await ReviewModel.findById(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy hóa đơn muốn xóa" });
    }

    const deleteReview = await ReviewModel.findByIdAndDelete(
      review._id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "xóa hóa đơn thành công ",
      deleteReview,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
