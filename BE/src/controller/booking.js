import bcrypt from "bcrypt";

import { BookingModel } from "../models";
import { BookingValidate } from "../validate";

export const create = async (req, res) => {
  try {
    const { error } = BookingValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const cccd = req.body.cccd.toString();
    const hashedCCCD = await bcrypt.hash(cccd, 10);

    req.body.cccd = hashedCCCD;

    const newBooking = await BookingModel.create(req.body);
    if (!newBooking) {
      return res.status(404).json({
        message: "Không thêm được đặt phòng",
      });
    }

    return res.status(201).json({
      message: "Thêm đặt phòng thành công",
      booking: newBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await BookingModel.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({
        message: "Không tìm thấy đặt phòng để xóa",
      });
    }

    return res.status(200).json({
      message: "Xóa đặt phòng thành công",
      booking: deletedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const updatedBooking = await BookingModel.findByIdAndUpdate(
      bookingId,
      req.body,
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        message: "Không tìm thấy đặt phòng để cập nhật",
      });
    }

    return res.status(200).json({
      message: "Cập nhật thông tin đặt phòng thành công",
      booking: updatedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
