import {getBookedRooms, reserveRoom } from '../controllers/roomBook.js'

import express  from "express";
const router = express.Router()


router.post('/', reserveRoom)
router.get('/:id', getBookedRooms)


export default router
