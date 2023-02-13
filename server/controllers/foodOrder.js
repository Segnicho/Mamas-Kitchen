import FoodOrder from "../models/FoodOrder.js";

export const orderFood = async (req, res) =>{
    const newOrder = FoodOrder(req.body)
    try {
        await newOrder.save()
        res.status(201).json("placed your order")
    } catch (err) {
        console.log(err);
    }
}