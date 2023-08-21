import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'di16kppny',
    api_key: '955456974318886',
    api_secret: 'kwR9qPDtibAUGmswrJD05yNpJZs'
});
const uploadImageToCloudinary = async (imagePath) => {
    try {
        // console.log(imagePath);
        const result = await cloudinary.uploader.upload(imagePath);
        // console.log(result);
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Error uploading image to Cloudinary');
    }
};

export { uploadImageToCloudinary };
