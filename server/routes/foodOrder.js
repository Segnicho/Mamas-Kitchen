import { orderFood, getOrderedFood } from '../controllers/foodOrder.js'

import express  from "express";
const router = express.Router()

router.post('/', orderFood)
router.get('/:id', getOrderedFood)



export default router
