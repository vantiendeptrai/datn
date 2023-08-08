import { ServiceModel } from "../models";
import { ServiceValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const serviceList = await ServiceModel.find();

    if (!serviceList || serviceList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách dịch vụ",
      });
    }

    return res.status(200).json({
      message: "Danh sách dịch vụ",
      data: serviceList,
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
    const service = await ServiceModel.findById(req.params.id);

    if (!service || service.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin dịch vụ",
      });
    }

    return res.status(200).json({
      message: "Thông tin dịch vụ",
      data: service,
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
    const { error } = ServiceValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const data = await ServiceModel.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thêm dịch vụ thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm dịch vụ thành công",
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
    const { error } = ServiceValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const data = await ServiceModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật dịch vụ thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật dịch vụ thành công",
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
    const data = await ServiceModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Xóa dịch vụ thất bại",
      });
    }

    return res.status(200).json({
      message: "Xóa dịch vụ thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi xóa tiện nghi",
    });
  }
};
