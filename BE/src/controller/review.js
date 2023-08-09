import { ReviewModel } from "../models";
import { HotelModel } from "../models";
import { ReviewValidate } from "../validate";



export const getAll = async (req, res) => {
  try {
    const reviewList = await ReviewModel.find();

    if (!reviewList || reviewList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách bình luận",
      });
    }

    return res.status(200).json({
      message: "Danh sách bình luận",
      data: reviewList,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi truy vấn cơ sở dữ liệu",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const review = await ReviewModel.findById(req.params.id);

    if (!review || review.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin bình luận",
      });
    }

    return res.status(200).json({
      message: "Thông tin bình luận",
      data: review,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi truy vấn cơ sở dữ liệu",
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
        errors: errors,
      });
    }

    const data = await ReviewModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thêm bình luận thất bại",
      });
    }
     await HotelModel.findByIdAndUpdate(
      req.body.id_user,
      { $push: { id_amenities
: data._id } },
      { new: true }
    );
    
    return res.status(200).json({
      message: "Thêm bình luận thành công",
      data,
    });

    

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi thêm mới",
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
        errors: errors,
      });
    }

    const data = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật bình luận thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật bình luận thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi cập nhật",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await ReviewModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Xóa bình luận thất bại",
      });
    }

    return res.status(200).json({
      message: "Xóa bình luận thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi xóa tiện nghi",
    });
  }
};
