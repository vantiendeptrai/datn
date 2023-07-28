import RoomType from "../models/roomType";
import { roomTypeValidate } from "../validate";

export const create = async (req, res) => {
  try {
    const { error } = roomTypeValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await RoomType.create(req.body);

    return res.status(200).json({
      message: "Thêm loại phòng thành công ",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi thêm loại phòng",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await RoomType.find();
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không lấy được danh sách loại phòng",
      });
    }

    return res.status(200).json({
      message: "Danh sách loại phòng",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi lấy danh sách loại phòng",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await RoomType.findById(req.params.id);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không lấy được thông tin loại phòng",
      });
    }

    return res.status(200).json({
      message: "Thông tin loại phòng",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi lấy thông tin loại phòng",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = roomTypeValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await RoomType.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy thông tin loại phòng",
      });
    }

    const newRoomType = await RoomType.findByIdAndUpdate(data._id, req.body, {
      new: true,
    });

    return res.status(200).json({
      message: "Cập nhật thông tin loại phòng thành công",
      data: newRoomType,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi cập nhật thông tin loại phòng",
    });
  }
};
