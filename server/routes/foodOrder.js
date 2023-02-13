import { orderFood } from '../controllers/foodOrder.js'

import express  from "express";
const router = express.Router()

router.get('/place', orderFood)


export default router
