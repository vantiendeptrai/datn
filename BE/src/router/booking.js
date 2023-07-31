import express from 'express';
import { create, remove, update } from '../controller/Booking';






const router = express.Router();

router.post('/', create);
router.delete('/:id', remove);
router.put('/booking/:id', update);


export default router;