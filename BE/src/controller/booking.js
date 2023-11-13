import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

import { UserModel } from "../models";
import { InformationModel } from "../models";
import { BookingModel } from "../models";
import { BookingValidate } from "../validate";
import { validateMiddleware } from "../middleware";
import { sendResponse } from "../utils";
import { sendMailBook } from "../utils/emailUtils";

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
      const infoRoom = await newBooking.populate('id_room').execPopulate();
      if (!newBooking) {
        return sendResponse(res, 404, 'Không đặt được phòng');
      }

      sendMailBook(info.name, infoRoom.room_number, infoRoom.check_in, infoRoom.check_out, info.phone, info.address)
      return sendResponse(res, 200, 'Đặt phòng thành công', newBooking)
    });

  } catch (error) {
    return sendResponse(res, 500, 'Lỗi server')
  }
};

// export const getAllProducts = async (req, res) => {
//   try {
//     const allProducts = await BookingModel.find();

//     if (allProducts.length === 0) {
//       return res.status(404).json({
//         message: "Hiện tại không có phòng nào",
//       });
//     }

//     return res.status(200).json({
//       message: "Lấy danh sách phòng thành công",
//       products: allProducts,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// export const getBookingDetail = async (req, res) => {
//   try {
//     const productId = req.params.id;

//     const productDetails = await BookingModel.findById(productId);

//     if (!productDetails) {
//       return res.status(404).json({
//         message: "Không tìm thấy phòng bạn cần tìm",
//       });
//     }

//     return res.status(200).json({
//       message: "Đã lấy được phòng bạn cần",
//       product: productDetails,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     const bookingId = req.params.id;

//     const deletedBooking = await BookingModel.findByIdAndDelete(bookingId);

//     if (!deletedBooking) {
//       return res.status(404).json({
//         message: "Không tìm thấy đặt phòng để xóa",
//       });
//     }

//     return res.status(200).json({
//       message: "Xóa đặt phòng thành công",
//       booking: deletedBooking,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const bookingId = req.params.id;

//     const updatedBooking = await BookingModel.findByIdAndUpdate(
//       bookingId,
//       req.body,
//       { new: true }
//     );

//     if (!updatedBooking) {
//       return res.status(404).json({
//         message: "Không tìm thấy đặt phòng để cập nhật",
//       });
//     }

//     return res.status(200).json({
//       message: "Cập nhật thông tin đặt phòng thành công",
//       booking: updatedBooking,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
