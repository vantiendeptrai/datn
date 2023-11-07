import { RoomModel } from "../models";
import { sendResponse } from "../utils";
import { RoomValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const roomList = await RoomModel.find();

    if (!roomList || roomList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách phòng");
    }

    return sendResponse(res, 200, "Danh sách phòng", roomList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách phòng");
  }
};

export const getOne = async (req, res) => {
  try {
    const room = await RoomModel.findById(req.params.id);

    if (!room || room.length === 0) {
      return sendResponse(res, 404, "Không có thông tin phòng");
    }

    return sendResponse(res, 200, "Thông tin phòng", room);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin phòng");
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, RoomValidate, async () => {
      const data = await RoomModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm phòng thất bại");
      }

      return sendResponse(res, 200, "Thêm phòng thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm phòng");
  }
};
1;

export const update = async (req, res) => {
  try {
    validateMiddleware(req, res, RoomValidate, async () => {
      const data = await RoomModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!data) {
        return sendResponse(res, 404, "Cập nhật phòng thất bại");
      }

      return sendResponse(res, 200, "Cập nhật phòng thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật phòng");
  }
};
