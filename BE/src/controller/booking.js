import bcrypt from 'bcrypt';
import Booking from '../models/Booking';
import { bookingValidate } from '../validate';
import nodemailer from 'nodemailer';

export const create = async (req, res) => {
    try {
        const { error } = bookingValidate.validate(req.body, {
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

        const newBooking = await Booking.create(req.body);
        if (!newBooking) {
            return res.status(404).json({
                message: 'Không thêm được đặt phòng',
            });
        }

        // Gửi email thông báo đặt phòng thành công
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_gmail_username@gmail.com',
                pass: 'your_gmail_password',
            },
        });

        const emailContent = {
            from: 'your_gmail_username@gmail.com',
            to: req.body.email,
            subject: 'Xác nhận đặt phòng thành công',
            text: `Chúng tôi xác nhận đặt phòng của bạn từ ${req.body.checkIn} đến ${req.body.checkOut}. Cảm ơn quý khách!`,
        };

        transporter.sendMail(emailContent, (error, info) => {
            if (error) {
                console.log('Gửi email thất bại:', error);
            } else {
                console.log('Email đã được gửi thành công:', info.response);
            }
        });

        return res.status(201).json({
            message: 'Thêm đặt phòng thành công',
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

        const deletedBooking = await Booking.findByIdAndDelete(bookingId);

        if (!deletedBooking) {
            return res.status(404).json({
                message: 'Không tìm thấy đặt phòng để xóa',
            });
        }

        return res.status(200).json({
            message: 'Xóa đặt phòng thành công',
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

        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId,
            req.body,
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({
                message: 'Không tìm thấy đặt phòng để cập nhật',
            });
        }

        return res.status(200).json({
            message: 'Cập nhật thông tin đặt phòng thành công',
            booking: updatedBooking,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


