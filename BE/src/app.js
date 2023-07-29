import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import AuthRouter from "./router/auth";
import HotelRouter from "./router/hotel";
<<<<<<< Updated upstream
=======
import RoomTypeRouter from "./router/roomType";
import BillRouter from './router/bill';

>>>>>>> Stashed changes
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/hotel", HotelRouter);
<<<<<<< Updated upstream
=======
app.use("/room-type", RoomTypeRouter);
app.use("/bill", BillRouter);

>>>>>>> Stashed changes
mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
