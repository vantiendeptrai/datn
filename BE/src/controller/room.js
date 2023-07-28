import Room from "../models/room";
import roomValidate from "../validate/room";

export const getAll = async (req, res) => {
  try {
    const data = await Room.find();

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách phòng",
      });
    }

    return res.status(200).json({
      message: "Danh sách phòng",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Room.findById(req.params.id);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin phòng",
      });
    }

    return res.status(200).json({
      message: "Thông tin phòng",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = roomValidate.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Room.create(req.body);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Thêm thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};
1;

export const update = async (req, res) => {
  try {
    const { error } = roomValidate.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật thành công ",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};