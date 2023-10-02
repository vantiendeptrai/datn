import { RoomTypeModel } from "../models";
import { RoomTypeValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const roomTypeList = await RoomTypeModel.find();

    if (!roomTypeList || roomTypeList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách loại phòng",
      });
    }

    return res.status(200).json({
      message: "Danh sách loại phòng",
      data: roomTypeList,
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
    const roomType = await RoomTypeModel.findById(req.params.id);

    if (!roomType || roomType.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin loại phòng",
      });
    }

    return res.status(200).json({
      message: "Thông tin loại phòng",
      data: roomType,
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
    const { error } = RoomTypeValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await RoomTypeModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thêm loại phòng thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm loại phòng thành công",
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
    const { error } = RoomTypeValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await RoomTypeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật loại phòng thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật loại phòng thành công",
      data,
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
    const data = await RoomTypeModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Xóa loại phòng thất bại",
      });
    }

    return res.status(200).json({
      message: "Xóa loại phòng thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
