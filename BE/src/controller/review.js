import { HotelModel } from "../models";
import { ReviewModel } from "../models";
import { sendResponse } from "../utils";
import { ReviewValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const reviewList = await ReviewModel.find();

    if (!reviewList || reviewList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách bình luận");
    }

    return sendResponse(res, 200, "Danh sách bình luận", reviewList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách bình luận"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    const review = await ReviewModel.findById(req.params.id);

    if (!review || review.length === 0) {
      return sendResponse(res, 404, "Không có thông tin bình luận");
    }

    return sendResponse(res, 200, "Thông tin bình luận", review);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin bình luận"
    );
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, ReviewValidate, async () => {
      const data = await ReviewModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm bình luận thất bại");
      }

      await HotelModel.findByIdAndUpdate(
        req.body.id_user,
        { $push: { id_review: data._id } },
        { new: true }
      );

      return sendResponse(res, 200, "Thêm bình luận thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm bình luận");
  }
};

export const update = async (req, res) => {
  try {
    validateMiddleware(req, res, ReviewValidate, async () => {
      const data = await ReviewModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!data) {
        return sendResponse(res, 404, "Cập nhật bình luận thất bại");
      }

      return sendResponse(res, 200, "Cập nhật bình luận thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật bình luận");
  }
};

export const remove = async (req, res) => {
  try {
    const data = await ReviewModel.findByIdAndDelete(req.params.id);

    if (!data) {
      return sendResponse(res, 404, "Xóa bình luận thất bại");
    }

    return sendResponse(res, 200, "Xóa bình luận thành công");
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi xóa bình luận");
  }
};
