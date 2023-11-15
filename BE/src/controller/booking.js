import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

import { UserModel } from "../models";
import { InformationModel } from "../models";
import { BookingModel } from "../models";
import { BookingValidate } from "../validate";
import { validateMiddleware } from "../middleware";
import { sendResponse } from "../utils";
import { sendMailBook, sendMailBookError } from "../utils/emailUtils";

export const getAllBooking = async (req, res) => {
  try {
    const data = await BookingModel.find().populate('id_room').populate('id_user')
      .populate({
        path: 'id_user',
        populate: {
          path: 'id_information'
        }
      })
    if (data) {

    }
  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, 'Lỗi server')
  }
}

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, BookingValidate, async () => {
      const { phone, address } = req.body;
      const user = await UserModel.findOne({ email: req.user.email })


      const info = await InformationModel.findOneAndUpdate(
        { _id: user.id_information },
        { $set: { phone: phone, address: address } },
        { new: true }, // Trả về văn bản đã cập nhật thay vì bản gốc

      );
      const newBooking = await BookingModel.create({
        id_user: user._id,
        ...req.body
      });
      await newBooking.populate('id_room')
      const infoRoom = newBooking.id_room;

      if (!newBooking) {
        return sendResponse(res, 404, 'Không đặt được phòng');
      }

      // sendMailBook(info.name, user.email, infoRoom.room_number, newBooking.check_in, newBooking.check_out, info.phone, info.address)
      return sendResponse(res, 200, 'Đặt phòng thành công', newBooking)
    });

  } catch (error) {
    return sendResponse(res, 500, 'Lỗi server')
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await BookingModel.findOne({ _id: req.params.id })
    // nếu status là đang chờ xử lý thì chuyển đổi sang status khác
    if (booking.status == 'Đang chờ xử lý') {
      const newStatus = await BookingModel.findOneAndUpdate(
        { _id: booking._id },
        { status: req.body.status },
        { new: true }
      )

      const updatedBooking = await BookingModel.findById(newStatus._id)
        .populate('id_room')
        .populate('id_user')
        .populate({
          path: 'id_user',
          populate: {
            path: 'id_information'
          }
        })
      updatedBooking.id_user.password = undefined
      if (newStatus.status == 'Đã hủy bỏ') {
        sendMailBookError(
          updatedBooking.id_user.id_information.name,
          updatedBooking.id_user.email,
          updatedBooking.id_room.room_number,
          updatedBooking.check_in,
          updatedBooking.check_out,
          updatedBooking.id_user.id_information.phone,
          updatedBooking.id_user.id_information.address
        )

        return sendResponse(res, 200, 'Hủy đặt phòng thành công', updatedBooking)
      }
      if (newStatus.status == 'Đã xác nhận') {
        sendMailBook(
          updatedBooking.id_user.id_information.name,
          updatedBooking.id_user.email,
          updatedBooking.id_room.room_number,
          updatedBooking.check_in,
          updatedBooking.check_out,
          updatedBooking.id_user.id_information.phone,
          updatedBooking.id_user.id_information.address
        )
        return sendResponse(res, 200, 'Cập nhật trạng thái thành công', updatedBooking)

      }
      return sendResponse(res, 200, 'Cập nhật trạng thái thành công', updatedBooking)

    } else if (booking.status == 'Hoàn thành' || booking.status == 'Đã hủy bỏ' || booking.status == 'Vắng mặt') {
      return sendResponse(res, 404, 'Không được cập nhật trạng thái')

    }
    const newStatus = await BookingModel.findOneAndUpdate(
      { _id: booking._id },
      { status: req.body.status },
      { new: true }
    )
    // Retrieve the updated document using findById and then populate
    const updatedBooking = await BookingModel.findById(newStatus._id)
      .populate('id_room')
      .populate('id_user')
      .populate({
        path: 'id_user',
        populate: {
          path: 'id_information'
        }
      })
    updatedBooking.id_user.password = undefined
    return sendResponse(res, 200, 'Cập nhật trạng thái thành công', updatedBooking)

  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, 'Lỗi server')
  }
}
