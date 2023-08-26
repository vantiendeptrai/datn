import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'di16kppny',
    api_key: '955456974318886',
    api_secret: 'kwR9qPDtibAUGmswrJD05yNpJZs'
});
export const uploadImageToCloudinary = async (image) => {
    try {
        // Kiểm tra xem `image` có phải là một đối tượng không
        if (typeof image === 'object' && image.path) {
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


