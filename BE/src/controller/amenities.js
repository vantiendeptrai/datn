import { AmenitiesModel } from "../models";
import { AmenitiesValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const amenitiesList = await AmenitiesModel.find();

    if (!amenitiesList || amenitiesList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách tiện nghi",
      });
    }

    return res.status(200).json({
      message: "Danh sách tiện nghi",
      data: amenitiesList,
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
    const amenities = await AmenitiesModel.findById(req.params.id);

    if (!amenities || amenities.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin tiện nghi",
      });
    }

    return res.status(200).json({
      message: "Thông tin tiện nghi",
      data: amenities,
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
    const { error } = AmenitiesValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await AmenitiesModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thêm tiện nghi thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm tiện nghi thành công",
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
    const { error } = AmenitiesValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }

    const data = await AmenitiesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật tiện nghi thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật tiện nghi thành công",
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
    const data = await AmenitiesModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Xóa tiện nghi thất bại",
      });
    }

    return res.status(200).json({
      message: "Xóa tiện nghi thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra",
    });
  }
};
