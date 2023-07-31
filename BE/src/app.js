import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import AuthRouter from "./router/auth";
import HotelRouter from "./router/hotel";
import RoomRouter from "./router/room";
import RoomTypeRouter from "./router/roomType";
import AmenitiesRouter from "./router/amenities";
import BillRouter from "./router/bill";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/hotel", HotelRouter);
app.use("/room", RoomRouter);
app.use("/room-type", RoomTypeRouter);
app.use("/amenities", AmenitiesRouter);
app.use("/bill", BillRouter);

mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
