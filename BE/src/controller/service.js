import { sendResponse } from "../utils";
import { ServiceModel } from "../models";
import { ServiceValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const serviceList = await ServiceModel.find();

    if (!serviceList || serviceList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách dịch vụ");
    }

    return sendResponse(res, 200, "Danh sách dịch vụ", serviceList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách dịch vụ");
  }
};

export const getOne = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);

    if (!service || service.length === 0) {
      return sendResponse(res, 404, "Không có thông tin dịch vụ");
    }

    return sendResponse(res, 200, "Thông tin dịch vụ", service);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin dịch vụ");
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, ServiceValidate, async () => {
      const data = await ServiceModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm dịch vụ thất bại");
      }

      return sendResponse(res, 200, "Thêm dịch vụ thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm dịch vụ");
  }
};

export const update = async (req, res) => {
  try {
    validateMiddleware(req, res, ServiceValidate, async () => {
      const data = await ServiceModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!data) {
        return sendResponse(res, 404, "Cập nhật dịch vụ thất bại");
      }

      return sendResponse(res, 200, "Cập nhật dịch vụ thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật dịch vụ");
  }
};

export const remove = async (req, res) => {
  try {
    const data = await ServiceModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return sendResponse(res, 404, "Xóa dịch vụ thất bại");
    }

    return sendResponse(res, 200, "Xóa dịch vụ thành công");
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi xóa dịch vụ");
  }
};
