import express from "express";
import { create, getAll, getOne, remove, update } from "../controller/payment";

const router = express.Router();

router.get("/getAllPayment", getAll);
router.get("/getPayment", getOne);
router.post("/createPayment", create);
router.put("/updatePayment", update);
router.delete("/removePayment", remove);

export default router;
