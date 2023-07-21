import bcrypt from "bcrypt";

import UserModel from "../models/user";

import { registerValidate } from "../validate";
import { sendMailRegister } from "../utils/sendMail";

const register = async (req, res) => {
  try {
    const { error } = registerValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const email = await UserModel.findOne({ email: req.body.email });
    if (email) {
      return res.status(404).json({ message: "Email đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });

    sendMailRegister(user.name, user.email);

    return res.status(200).json({
      message: "Đăng ký tài khoản thành công",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi đăng ký",
    });
  }
};

export { register };
