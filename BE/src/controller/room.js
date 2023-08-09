import { RoomModel } from "../models";
import { RoomValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const roomList = await RoomModel.find();

    if (!roomList || roomList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách phòng",
      });
    }

    return res.status(200).json({
      message: "Danh sách phòng",
      data: roomList,
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
    const room = await RoomModel.findById(req.params.id);

    if (!room || room.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin phòng",
      });
    }

    return res.status(200).json({
      message: "Thông tin phòng",
      data: room,
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
    const { error } = RoomValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const data = await RoomModel.create(req.body);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Thêm phòng thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm phòng thành công",
      data: data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi thêm mới",
    });
  }
};
1;

export const update = async (req, res) => {
  try {
    const { error } = RoomValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const data = await RoomModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật phòng thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật phòng thành công",
      data: data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi cập nhật",
    });
  }
};
