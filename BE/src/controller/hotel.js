import cloudinary from "cloudinary";
import { HotelModel } from "../models";
import { uploadImageToCloudinary } from "../utils/upImages";
import { HotelValidate } from "../validate";
import { ObjectId } from "mongodb";
import { sendResponse } from "../utils";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const hotelList = await HotelModel.find().populate('id_amenities').populate('id_review');

    if (!hotelList || hotelList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách khách sạn");
    }

    return sendResponse(res, 200, "Danh sách khách sạn", hotelList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách khách sạn"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.params.id).populate('id_amenities').populate('id_review');

    if (!hotel || hotel.length === 0) {
      return sendResponse(res, 404, "Không có thông tin khách sạn");
    }

    return sendResponse(res, 200, "Thông tin khách sạn", hotel);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin khách sạn"
    );
  }
};

export const create = async (req, res) => {
  const validImages = Object.values(req.files).filter((file) => file.size > 0);
  if (!validImages.length) {
    return res
      .status(400)
      .json({ message: "Vui lòng tải lên ít nhất một file ảnh." });
  }

  const imagesArray = [];

  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        fieldName: field,
        size: file.size,
        path: file.path,
        name: file.name,
        type: file.type,
        lastModifiedDate: file.lastModifiedDate,
      });
    }
  }

  req.files.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");
    const amenities = id_amenities.map((item, index) => new ObjectId(item));
    req.fields.id_amenities = amenities;
  }

  try {
    validateMiddleware(req, res, HotelValidate, async () => {
      const imagesUrls = await Promise.all(
        req.files.images.map(uploadImageToCloudinary)
      );

      const images = imagesUrls.map((imageUrl, index) => ({
        url: imageUrl,
      }));
      console.log(images);
      const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

      if (!phoneNumberRegex.test(req.fields.phone)) {
        return sendResponse(res, 404, "Số điện thoại không hợp lệ");
      }

      const data = await HotelModel.create({
        ...req.fields,
        images: images,
      });
      if (!data) {
        return sendResponse(res, 404, "Thêm khách sạn thất bại");
      }
      return sendResponse(res, 200, "Thêm khách sạn thành công", data);
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm khách sạn");
  }
};

export const update = async (req, res) => {
  const validImages = Object.values(req.files).filter((file) => file.size > 0);

  if (!validImages.length) {
    return res
      .status(400)
      .json({ message: "Vui lòng tải lên ít nhất một file ảnh." });
  }

  const imagesArray = [];

  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        fieldName: field,
        size: file.size,
        path: file.path,
        name: file.name,
        type: file.type,
        lastModifiedDate: file.lastModifiedDate,
      });
    }
  }

  req.files.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");
    const amenities = id_amenities.map((item, index) => new ObjectId(item));
    req.fields.id_amenities = amenities;
  }
  try {
    validateMiddleware(req, res, HotelValidate, async () => {
      const existingData = await HotelModel.findById(req.params.id);
      const existingImages = existingData.images;
      let newImages = existingImages;

      if (req.files && req.files.images) {
        newImages = [];
        for (const image of req.files.images) {
          const imageResult = await cloudinary.v2.uploader.upload(image.path, {
            folder: "hotel-images",
            use_filename: true,
          });
          newImages.push({
            url: imageResult.secure_url,
          });
        }
      }
      const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

      if (!phoneNumberRegex.test(req.fields.phone)) {
        return sendResponse(res, 404, "Số điện thoại không hợp lệ");
      }
      const newData = {
        ...req.fields,
        images: newImages,
      };
      const data = await HotelModel.findByIdAndUpdate(req.params.id, newData, {
        new: true,
      });

      if (!data) {
        return sendResponse(res, 404, "Cập nhật khách sạn thất bại");
      }

      return sendResponse(res, 200, "Cập nhật khách sạn thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật khách sạn");
  }
};
