import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    amenities: [{
        code: String,
        value: Boolean,
    }],
    city: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    }
}, { timestamps: true, versionKey: false })
export default mongoose.model("Hotel", hotelSchema)