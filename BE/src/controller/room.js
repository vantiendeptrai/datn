import cloudinary from 'cloudinary';
import { ObjectId } from "mongodb";
import { RoomModel } from "../models";
import { uploadImageToCloudinary } from "../utils/upImages";
import { sendResponse } from "../utils";
import { RoomValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const roomList = await RoomModel.find().populate('id_amenities').populate('id_hotel').populate('id_roomType');

    if (!roomList || roomList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách phòng");
    }

    return sendResponse(res, 200, "Danh sách phòng", roomList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách phòng");
  }
};

export const getOne = async (req, res) => {
  try {
    const room = await RoomModel.findById(req.params.id).populate('id_amenities').populate('id_hotel').populate('id_roomType');

    if (!room || room.length === 0) {
      return sendResponse(res, 404, "Không có thông tin phòng");
    }

    return sendResponse(res, 200, "Thông tin phòng", room);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin phòng");
  }
};

export const create = async (req, res) => {
  // Lọc ra các tệp ảnh có kích thước lớn hơn 0
  const validImages = Object.values(req.files).filter((file) => file.size > 0);

  // Kiểm tra xem có file ảnh hợp lệ để tiếp tục xử lý
  if (!validImages.length) {
    return res.status(400).json({ message: 'Vui lòng tải lên ít nhất một file ảnh.' });
  }
  // Tạo một mảng để lưu trữ thông tin tệp ảnh
  const imagesArray = [];
  // Duyệt qua các thuộc tính trong req.files
  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      // Thêm thông tin của tệp vào mảng
      imagesArray.push({
        fieldName: field,
        size: file.size,
        path: file.path,
        name: file.name,
        type: file.type,
        lastModifiedDate: file.lastModifiedDate
        // Thêm các thuộc tính khác tùy theo nhu cầu
      });
    }

    // Hiển thị mảng các tệp ảnh
    req.files.images = imagesArray;
  }

  // tao mang id_amenities
  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(',');
    const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
    req.fields.id_amenities = amenities
  }
  try {
    validateMiddleware(req, res, RoomValidate, async () => {
      // Upload tất cả ảnh lên Cloudinary và lấy các đường dẫn URL
      const imagesUrls = await Promise.all(req.files.images.map(uploadImageToCloudinary));
      // Tạo mảng chứa thông tin ảnh với các đường dẫn URL
      const images = imagesUrls.map((imageUrl, index) => ({
        url: imageUrl,
      }));
      const data = await RoomModel.create({
        ...req.fields,
        images: images,
      });

      if (!data) {
        return sendResponse(res, 404, "Thêm phòng thất bại");
      }

      return sendResponse(res, 200, "Thêm phòng thành công", data);
    });
  } catch (error) {
    console.log(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm phòng");
  }
}


export const update = async (req, res) => {
  // Lọc ra các tệp ảnh có kích thước lớn hơn 0
  const validImages = Object.values(req.files).filter((file) => file.size > 0);

  // Kiểm tra xem có file ảnh hợp lệ để tiếp tục xử lý
  if (!validImages.length) {
    return res.status(400).json({ message: 'Vui lòng tải lên ít nhất một file ảnh.' });
  }
  // Tạo một mảng để lưu trữ thông tin tệp ảnh
  const imagesArray = [];
  // Duyệt qua các thuộc tính trong req.files
  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      // Thêm thông tin của tệp vào mảng
      imagesArray.push({
        fieldName: field,
        size: file.size,
        path: file.path,
        name: file.name,
        type: file.type,
        lastModifiedDate: file.lastModifiedDate
        // Thêm các thuộc tính khác tùy theo nhu cầu
      });
    }

    // Hiển thị mảng các tệp ảnh
    req.files.images = imagesArray;
  }

  // tao mang id_amenities
  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(',');
    const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
    req.fields.id_amenities = amenities
  }
  try {
    validateMiddleware(req, res, RoomValidate, async () => {
      // Lấy dữ liệu khách sạn hiện tại từ database
      const existingData = await RoomModel.findById(req.params.id);
      // Lấy mảng ảnh hiện tại từ dữ liệu khách sạn hiện tại
      const existingImages = existingData.images;
      // Tạo mảng mới để lưu trữ ảnh sau cập nhật
      let newImages = existingImages;

      // Nếu có sự cập nhật ảnh
      if (req.files && req.files.images) {
        newImages = [];
        // Duyệt qua các ảnh mới để tải lên và thêm vào mảng newImages
        for (const image of req.files.images) {
          const imageResult = await cloudinary.v2.uploader.upload(image.path, {
            folder: 'room-images',
            use_filename: true,
          });
          newImages.push({
            url: imageResult.secure_url,
          });
        }
      }
      // Tạo đối tượng mới chứa thông tin cập nhật
      const newData = {
        ...req.fields,
        images: newImages,
      };
      // Thực hiện cập nhật dữ liệu khách sạn
      const data = await RoomModel.findByIdAndUpdate(req.params.id, newData, {
        new: true,
      });
      if (!data) {
        return sendResponse(res, 404, "Cập nhật phòng thất bại");
      }

      return sendResponse(res, 200, "Cập nhật phòng thành công", data);

    });

  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật phòng");
  }
};
