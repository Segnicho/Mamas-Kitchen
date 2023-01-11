import { } from '../controllers/food.js'

import express  from "express";
const router = express.Router()

router.put('/:id', updateFood)
router.get('/find/:id', getAFood)
router.get('/', getAllFoods)
router.delete('/:id', deleteAFood)



export default router
