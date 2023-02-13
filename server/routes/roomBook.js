import {getBookedRooms, bookRoom } from '../controllers/roomBook.js'

import express  from "express";
const router = express.Router()


router.post('/', bookRoom)
router.get('/:userId', getBookedRooms)


export default router
