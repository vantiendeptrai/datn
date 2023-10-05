import cloudinary from 'cloudinary';
import { HotelModel } from "../models";
import { uploadImageToCloudinary } from "../utils/upImages";
import { HotelValidate } from "../validate";
import { ObjectId } from 'mongodb'
import { sendResponse } from "../utils";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const hotelList = await HotelModel.find();

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
    const hotel = await HotelModel.findById(req.params.id);

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
  }
  // Hiển thị mảng các tệp ảnh
  req.files.images = imagesArray;
  // tao mang id_amenities
  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(',');
    const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
    req.fields.id_amenities = amenities
  }


  try {
    validateMiddleware(req, res, HotelValidate, async () => {

      // Upload tất cả ảnh lên Cloudinary và lấy các đường dẫn URL
      const imagesUrls = await Promise.all(req.files.images.map(uploadImageToCloudinary));
      // Tạo mảng chứa thông tin ảnh với các đường dẫn URL
      const images = imagesUrls.map((imageUrl, index) => ({
        status: 'done',
        name: req.files.images[index].name,
        uid: req.files.images[index].name,
        url: imageUrl,
      }));
      // Biểu thức chính quy cho số điện thoại có định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx
      const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

      // Sử dụng biểu thức chính quy để kiểm tra số điện thoại

      if (!phoneNumberRegex.test(req.fields.phone)) {
        return sendResponse(res, 404, 'Số điện thoại không hợp lệ')
      }

      // Tạo dữ liệu mới với thông tin ảnh đã tải lên
      const data = await HotelModel.create({
        ...req.fields,
        images: images, // Liên kết thông tin ảnh với dữ liệu khách sạn
      });
      if (!data) {
        return sendResponse(res, 404, 'Thêm khách sạn thất bại')
      }
      return sendResponse(res, 200, 'Thêm khách sạn thành công', data)
    })
  } catch (error) {
    console.log(error)
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm khách sạn");
  }
};


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
  }

  // Hiển thị mảng các tệp ảnh
  req.files.images = imagesArray;

  // tao mang id_amenities
  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(',');
    const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
    req.fields.id_amenities = amenities
  }
  try {

    validateMiddleware(req, res, HotelValidate, async () => {
      // Lấy dữ liệu khách sạn hiện tại từ database
      const existingData = await HotelModel.findById(req.params.id);
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
            folder: 'hotel-images',
            use_filename: true,
          });
          newImages.push({
            status: 'done',
            name: image.name,
            uid: image.name,
            url: imageResult.secure_url,
          });
        }
      }
      // Biểu thức chính quy cho số điện thoại có định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx
      const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

      // Sử dụng biểu thức chính quy để kiểm tra số điện thoại

      if (!phoneNumberRegex.test(req.fields.phone)) {
        return sendResponse(res, 404, 'Số điện thoại không hợp lệ')
      }
      // Tạo đối tượng mới chứa thông tin cập nhật
      const newData = {
        ...req.fields,
        images: newImages,
      };
      // Thực hiện cập nhật dữ liệu khách sạn
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