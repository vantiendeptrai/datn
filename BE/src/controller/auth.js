import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { UserModel } from "../models";
import { RegisterValidate, LoginValidate } from "../validate";
import { sendMailRegister } from "../utils/sendMail";

dotenv.config();

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = RegisterValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email đã tồn tại",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });

    sendMailRegister(user.name, user.email);

    return res.status(201).json({
      message: "Đăng ký tài khoản thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi đăng ký",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = LoginValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Tài khoản hoặc mật khẩu không chính xác",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Tài khoản hoặc mật khẩu không chính xác",
      });
    }

    if (user.isLockAccount) {
      return res.status(403).json({
        message: "Tài khoản đã bị khóa",
      });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });

    return res.status(200).json({
      message: "Đăng nhập tài khoản thành công",
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi đăng nhập",
    });
  }
};

export const lockAccount = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy người dùng",
      });
    }

    if (user.isLockAccount) {
      return res.status(403).json({
        message: "Tài khoản này đã bị khóa",
      });
    }

    user.isLockAccount = true;
    await user.save();

    return res.status(200).json({
      message: "Khóa tài khoản thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi khóa tài khoản",
    });
  }
};

export const refreshToken = (req, res) => {
  try {
    const refreshToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      message: "Làm mới token thành công",
      newAccessToken: newAccessToken,
    });
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

    console.log(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi làm mới token",
    });
  }
};

export const getUserByToken = (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy thông tin người dùng",
      });
    }

    user.password = undefined;
    user.isLockAccount = undefined;
    user.role = undefined;

    return res.status(200).json({
      message: "Thông tin người dùng",
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi lấy thông tin người dùng",
    });
  }
};
