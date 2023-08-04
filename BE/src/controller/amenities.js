import Amenities from "../models/amenities";
import { amenitiesValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const data = await Amenities.find();
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách tiện nghi",
      });
    }

    return res.status(200).json({
      message: "Danh sách tiện nghi",
      data: data,
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
    const data = await Amenities.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy tiện nghi",
      });
    }
    return res.status(200).json({
      message: "Tìm tiện nghi thành công ",
      data: data,
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
    const { error } = amenitiesValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Amenities.create(req.body);
    if (!data) {
      return res.status(404).json({
        message: "Không thêm được tiện nghi",
      });
    }
    return res.status(200).json({
      message: "Thêm tiện nghi thành công ",
      data: data,
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
    const { error } = amenitiesValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Amenities.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Không cập nhật được tiện nghi",
      });
    }

    return res.status(200).json({
      message: "Cập nhật tiện nghi thành công ",
      data: data,
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
    const data = await Amenities.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy  tiện nghi muốn xóa",
      });
    }

    return res.status(200).json({
      message: "xóa tiện nghi thành công ",
      data: data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi xóa",
    });
  }
};
