import Service from "../models/service";
import { serviceValidate } from "../validate";
export const getAll = async (req, res) => {
    try {
        const data = await Service.find();
        if (!data || data.length === 0) {
            return res.status(404).json({
                message: "Không lấy được danh sách dịch vụ",
            });
        }

        return res.status(200).json({
            message: "Danh sách dịch vụ",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi lấy danh sách dịch vụ",
        });
    }
};
export const getOne = async (req, res) => {
    try {
        const data = await Service.findById(req.params.id);
        if (!data || data.length === 0) {
            return res.status(404).json({
                message: "Không lấy được dịch vụ",
            });
        }

        return res.status(200).json({
            message: "Lấy dịch vụ thành công",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi lấy dịch vụ",
        });
    }
};
export const create = async (req, res) => {
    try {
        const { error } = serviceValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                errors: errors,
            });
        }

        const data = await Service.create(req.body);

        return res.status(200).json({
            message: "Thêm dịch vụ thành công ",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi thêm dịch vụ",
        });
    }
};
export const update = async (req, res) => {
    try {
        const { error } = serviceValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                errors: errors,
            });
        }

        const data = await Service.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                message: "Không tìm thấy thông tin dịch vụ",
            });
        }

        const newService = await Service.findByIdAndUpdate(data._id, req.body, {
            new: true,
        });

        return res.status(200).json({
            message: "Cập nhật thông tin dịch vụ thành công",
            data: newService,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi cập nhật thông tin dịch vụ",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const data = await Service.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({
                message: "Không lấy được dịch vụ muốn xóa",
            });
        }

        return res.status(200).json({
            message: "Xóa dịch vụ thành công",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi xóa dịch vụ",
        });
    }
};
