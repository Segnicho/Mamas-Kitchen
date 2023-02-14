import express  from "express";
import { deleteARoom, getAllRooms, getARoom, updateRoom } from '../controllers/room.js';
const router = express.Router()
router.put('/:id', updateRoom)
router.get('/:id', getARoom)
router.get('/', getAllRooms)
router.delete('/:id', deleteARoom)



export default router
