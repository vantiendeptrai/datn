import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import UserModel from "../models/user";

dotenv.config();

const loginMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "Người dùng không tồn tại",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        message: "Token đã hết hạn!",
      });
    } else if (error instanceof jwt.NotBeforeError) {
      return res.status(401).json({
        message: "Token chưa có hiệu lực!",
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        message: "Token không hợp lệ!",
      });
    }

    console.error(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra!",
    });
  }
};

export default loginMiddleware;
