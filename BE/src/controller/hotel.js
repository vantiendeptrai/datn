import Hotel from "../models/hotel";
import { hotelValidate } from "../validate";
export const getAll = async (req, res) => {
    try {
        const data = await Hotel.find()
        if (data.length === 0) {
            return res.status(404).json({ message: "Không lấy được danh sách khách sạn" })
        }
        return res.status(200).json({ message: "Lấy danh sách khách sạn thành công ", data })

    } catch (error) {
        return res.status(500).json({ message: "Lỗi server " + error.message })

    }
}
export const getOne = async (req, res) => {
    try {
        const data = await Hotel.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ message: "Không lấy được khách sạn theo mã" })
        }
        return res.status(200).json({ message: "Lấy khách sạn theo mã thành công ", data })

    } catch (error) {
        return res.status(500).json({ message: "Lỗi server " + error.message })

    }
}
export const create = async (req, res) => {
    try {
        const { error } = hotelValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
        const isPhoneNumberValid = phoneNumberRegex.test(req.body.phone);

        if (!isPhoneNumberValid) {
            return res.status(400).json({
                message: "Số điện thoại không đúng định dạng",
            });
        }
        const newHotel = {
            ...req.body,
            phone: isPhoneNumberValid
        }
        const data = await Hotel.create(newHotel)
        if (!data) {
            return res.status(404).json({ message: "Không thêm được khách sạn" })
        }
        return res.status(200).json({ message: "Thêm khách sạn thành công ", data })

    } catch (error) {
        return res.status(500).json({ message: "Lỗi server " + error.message })

    }

}
export const update = async (req, res) => {
    try {
        const { error } = hotelValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await Hotel.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ message: "Không tìm thấy khách sạn muốn cập nhật" })
        }
        const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
        const isPhoneNumberValid = phoneNumberRegex.test(req.body.phone);

        if (!isPhoneNumberValid) {
            return res.status(400).json({
                message: "Số điện thoại không đúng định dạng",
            });
        }
        const newHotel = {
            ...req.body,
            phone: isPhoneNumberValid
        }
        // console.log(newHotel);
        const updateHotel = await Hotel.findByIdAndUpdate(data._id, newHotel, { new: true })
        return res.status(200).json({ message: "Cập nhật khách sạn thành công ", updateHotel })
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server " + error.message })

    }
}