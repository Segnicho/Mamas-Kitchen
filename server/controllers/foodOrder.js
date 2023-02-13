import FoodOrder from "../models/FoodOrder.js";

export const orderFood = async (req, res) =>{
    const newOrder = new FoodOrder(req.body)
    try {
        await newOrder.save()
        res.status(201).json("placed your order")
    } catch (err) {
        console.log(err);
    }
}
export const getOrderedFood = async (req, res) =>{
    try {
        const foods = await FoodOrder.find({userId:id})
        res.status(200).json(foods)
    } catch (err) {
        res.status(501).json(err)
    }
}