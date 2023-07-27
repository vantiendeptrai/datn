import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: [
      {
        status: {
          type: String,
          default: "done",
        },
        name: {
          type: String,
          required: true,
        },
        uid: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      min: 0,
      required: true,
    },
    amenities: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
    serviceFree: {
      type: String,
      required: true,
    },
    // id_hotel:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Hotel",
    // },
    // id_roomType:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "roomType",
    // },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Room", roomSchema);
