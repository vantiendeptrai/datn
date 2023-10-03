import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { emailRegister } from "../views";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

export const sendMailRegister = async (name, email) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đăng ký tài khoản thành công",
    text: `Chào bạn, ${name}`,
    html: emailRegister(name),
  });
};
