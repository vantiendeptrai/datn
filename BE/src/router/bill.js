import express from "express";

<<<<<<< Updated upstream
import { create, getAll, getOne, update, remove } from "../controller/bill";
=======
import { create, getAll, getOne, update } from "../controller/bill";
>>>>>>> Stashed changes
import { isAdminMiddleware } from "../middleware/index";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.patch("/:id", update);
<<<<<<< Updated upstream
router.delete("/:id", remove);

export default router;
=======

export default router;
>>>>>>> Stashed changes
