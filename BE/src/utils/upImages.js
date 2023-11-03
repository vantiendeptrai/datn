import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "project-alone",
  api_key: "733913983795291",
  api_secret: "1M3Rwo_-yZGdR4wwtlTS7pXr3rw",
});
export const uploadImageToCloudinary = async (image) => {
  try {
    // Kiểm tra xem `image` có phải là một đối tượng không
    if (typeof image === "object" && image.path) {
      const result = await cloudinary.uploader.upload(image.path);
      return result.secure_url; // Trả về URL của ảnh đã tải lên Cloudinary
    } else {
      throw new Error("Invalid image object or path.");
    }
  } catch (error) {
    console.error("Error uploading image to Cloudinary", error);
    throw error;
  }
};
