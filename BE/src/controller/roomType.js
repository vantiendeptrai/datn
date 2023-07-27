import RoomType from "../models/roomType";
import { roomTypeValidate } from "../validate";
export const create = async (req, res) => {
    try {
        const { error } = roomTypeValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await RoomType.create(req.body)
        if (!data) {
            return res.status(404).json({ message: "Không thêm được loại phòng" });
        }
        return res.status(200).json({ message: "Thêm loại phòng thành công ", data: data });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
}
export const getAll = async (req, res) => {
    try {
        const data = await RoomType.find()
        if (data.length === 0) {
            return res.status(404).json({ message: "Không lấy được danh sách loại phòng" });
        }
        return res.status(200).json({ message: "Lấy danh sách loại phòng thành công ", data: data });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
}
export const getOne = async (req, res) => {
    try {
        const data = await RoomType.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ message: "Không lấy được loại phòng" });
        }
        return res.status(200).json({ message: "Lấy loại phòng thành công ", data: data });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
}

export const update = async (req, res) => {
    try {
        const { error } = roomTypeValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await RoomType.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ message: "Không tìm được loại phòng" });
        }
        const newRoomType = await RoomType.findByIdAndUpdate(data._id, req.body, { new: true });
        return res.status(200).json({ message: "Cập nhật loại phòng thành công ", data: newRoomType });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
}