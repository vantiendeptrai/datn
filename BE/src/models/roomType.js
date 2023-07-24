import mongoose from "mongoose";
const roomtypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true, versionKey: false })
export default mongoose.model('RoomType', roomtypeSchema)