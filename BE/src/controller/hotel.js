import { HotelModel } from "../models";
import { uploadImageToCloudinary } from "../utils/upImages";
import { HotelValidate } from "../validate";

export const getAll = async (req, res) => {
  try {
    const hotelList = await HotelModel.find();

    if (!hotelList || hotelList.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách khách sạn",
      });
    }

    return res.status(200).json({
      message: "Danh sách khách sạn",
      data: hotelList,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi truy vấn cơ sở dữ liệu",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);

    if (!hotel || hotel.length === 0) {
      return res.status(404).json({
        message: "Không có thông tin khách sạn",
      });
    }

    return res.status(200).json({
      message: "Thông tin khách sạn",
      data: hotel,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi truy vấn cơ sở dữ liệu",
    });
  }
};

export const create = async (req, res) => {
  // console.log(req.files);

  try {
    // const { error } = HotelValidate.validate(req.fields, req.files, {
    //   abortEarly: false,
    // });

    // if (error) {
    //   const errors = error.details.map((err) => err.message);
    //   return res.status(400).json({
    //     errors: errors,
    //   });
    // }
    // console.log(req.files?.images);
    const imagePath = req.files.images.path;
    // console.log(imagePath);
    const imageUrl = await uploadImageToCloudinary(imagePath);
    const imagePromises = {
      status: 'done',
      name: req.files?.images.name,
      uid: req.files?.images.name,
      url: imageUrl,
    }

    // console.log(imagePromises);
    const images = await Promise.all([imagePromises]);


    // console.log(images);
    const data = await HotelModel.create({
      ...req.fields,
      images: images, // Liên kết thông tin ảnh với dữ liệu khách sạn
    });
    if (!data) {
      return res.status(404).json({
        message: "Thêm khách sạn thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm khách sạn thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi thêm mới",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = HotelValidate.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    const data = await HotelModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Cập nhật khách sạn thất bại",
      });
    }

    return res.status(200).json({
      message: "Cập nhật khách sạn thành công",
      data,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Đã có lỗi xảy ra khi cập nhật",
    });
  }
};
