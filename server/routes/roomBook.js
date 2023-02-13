import {addRoom, reserveRoom } from '../controllers/roomBook.js'

import express  from "express";
const router = express.Router()
router.post('/addroom', addRoom)
router.post('/reserveroom', reserveRoom)



export default router
