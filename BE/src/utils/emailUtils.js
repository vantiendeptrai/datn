import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { emailOauthRegister, emailRegister } from "../views";
import { emailBooking } from "../views/formEmail";

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

export const sendMailOauthRegister = async (name, email, password) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đăng ký tài khoản thành công",
    text: `Chào bạn, ${name}`,
    html: emailOauthRegister(name, password),
  });
};

export const sendMailBook = async (name, room, check_in, check_out, phone, address) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đặt phòng thành công",
    text: `Chào bạn, ${name}`,
    html: emailBooking(name, room, check_in, check_out, phone, address),
  });
};
