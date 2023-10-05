import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { UserModel } from "../models";
import { handleJWTError, sendResponse } from "../utils";

dotenv.config();

export const isAdminMiddleware = async (req, res, next) => {
  // console.log(req?.cookies?.accessToken);

  try {
    const accessToken = req?.cookies?.accessToken;

    if (!accessToken) {
      return sendResponse(res, 401, "Bạn chưa đăng nhập");
    }

    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id);

    if (!user || user.role !== "Admin") {
      return sendResponse(res, 403, "Bạn không có quyền truy cập");
    }

    req.user = user;

    next();
  } catch (error) {
    handleJWTError(error, res);

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const loginMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return sendResponse(res, 401, "Bạn chưa đăng nhập");
    }

    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return sendResponse(res, 401, "Người dùng không tồn tại");
    }

    req.user = user;

    next();
  } catch (error) {
    handleJWTError(error, res);

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};
