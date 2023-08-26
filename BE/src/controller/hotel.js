import cloudinary from 'cloudinary';
import { HotelModel } from "../models";
import { uploadImageToCloudinary } from "../utils/upImages";
import { HotelValidate } from "../validate";
import { ObjectId } from 'mongodb'

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
  const id_amenities = req.fields.id_amenities.split(',');
  const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
  req.fields.id_amenities = amenities

  try {

    const { error } = HotelValidate.validate(req.fields, req.files, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }

    // Upload tất cả ảnh lên Cloudinary và lấy các đường dẫn URL
    const imagesUrls = await Promise.all(req.files.images.map(uploadImageToCloudinary));
    // Tạo mảng chứa thông tin ảnh với các đường dẫn URL
    const images = imagesUrls.map((imageUrl, index) => ({
      status: 'done',
      name: req.files.images[index].name,
      uid: req.files.images[index].name,
      url: imageUrl,
    }));
    // Tạo dữ liệu mới với thông tin ảnh đã tải lên
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
      message: "Đã có lỗi xảy ra khi thêm mới", error
    });
  }
};


export const update = async (req, res) => {
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
  const id_amenities = req.fields.id_amenities.split(',');
  const amenities = id_amenities.map((item, index) => (new ObjectId(item)))
  req.fields.id_amenities = amenities
  try {
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
      return res.status(404).json({
        message: 'Cập nhật khách sạn thất bại',
      });
    }
    return res.status(200).json({
      message: 'Cập nhật khách sạn thành công',
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Đã có lỗi xảy ra khi cập nhật', error
    });
  }
};