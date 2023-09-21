import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import expressFormidable from 'express-formidable';

import {
  AmenitiesRouter,
  AuthRouter,
  BillRouter,
  BookingRouter,
  HotelRouter,
  PaymentRouter,
  ReviewRouter,
  RoomRouter,
  RoomTypeRouter,
  ServicesRouter,
} from "./router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/amenities", AmenitiesRouter);
app.use("/auth", AuthRouter);
app.use("/bill", BillRouter);
app.use("/booking", BookingRouter);
app.use("/hotel", HotelRouter);
app.use("/payment", PaymentRouter);
app.use("/review", ReviewRouter);
app.use("/room", RoomRouter);
app.use("/room-type", RoomTypeRouter);
app.use("/services", ServicesRouter);

mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
