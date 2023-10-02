import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { InformationModel, UserModel } from "../models";
import { RegisterValidate, LoginValidate } from "../validate";
import {
  getGoogleOauthToken,
  getGoogleUser,
  loginToken,
  sendMailRegister,
} from "../utils";

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

    const information = await InformationModel.create({ ...req.body });

    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
      id_information: information._id,
    });

    sendMailRegister(user.name, user.email);

    return res.status(201).json({
      message: "Đăng ký thành công",
    });
  } catch (error) {
    console.error(error);

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

    await loginToken(res, user);

    return res.status(200).json({
      message: "Đăng nhập thành công",
    });
  } catch (error) {
    console.error(error);

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
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi khóa tài khoản",
    });
  }
};

export const refreshToken = (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("accessToken", newAccessToken, { httpOnly: true });

    return res.status(200).json({
      message: "Làm mới token thành công",
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

    console.error(error);
    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi làm mới token",
    });
  }
};

export const getUserByToken = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy thông tin người dùng",
      });
    }

    const information = await InformationModel.findById(user.id_information);

    return res.status(200).json({
      message: "Thông tin người dùng",
      information,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi lấy thông tin người dùng",
    });
  }
};

export const googleOauth = async (req, res) => {
  const code = req.query.code;
  const pathUrl = req.query.state || "/";

  if (!code) {
    return res.redirect(`${process.env.PUBLIC_URL}error`);
  }

  try {
    const { id_token, access_token } = await getGoogleOauthToken(code);
    const { id, name, email, picture } = await getGoogleUser(
      id_token,
      access_token
    );

    const user = await UserModel.findOne({ email });

    if (user) {
      const user = await UserModel.findOneAndUpdate(
        { email },
        { $set: { id_google: id } },
        { new: true, upsert: true }
      );

      await InformationModel.findOneAndUpdate(
        { _id: user.id_information },
        { $set: { image: picture } },
        { new: true, upsert: true }
      );

      await loginToken(res, user);
    } else {
      const information = await InformationModel.create({
        name,
        image: picture,
      });

      const user = await UserModel.create({
        id_google: id,
        email,
        password: email,
        id_information: information._id,
      });

      await loginToken(user);
    }

    return res.redirect(`${process.env.PUBLIC_URL}${pathUrl}`);
  } catch (error) {
    console.error(error);

    return res.redirect(`${process.env.PUBLIC_URL}error`);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("accessToken", "", { maxAge: 1 });
    res.cookie("refreshToken", "", { maxAge: 1 });

    return res.status(200).json({
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi đăng xuất",
    });
  }
};
