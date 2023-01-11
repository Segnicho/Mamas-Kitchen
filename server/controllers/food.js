import Food from "../models/Food.js";

export const getAFood = async(req, res) =>{
    try {
        const food = await Food.findById(req.params.id);
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json(err)
    }

}


export const getAllFoods = async (req, res)=>{
    try {
        const allFoods = await Food.find()
        res.status(200).json(allFoods)
    } catch (err) {
        res.status(500).json(err)
    }
}


export const updateFood = async (req, res)=>{
    
        try {
            const updatedUser = await Food.findByIdAndUpdate(req.params.id,{
            $set:req.body
            },{
                new:true
            })
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err)
        }
    } 

export const deleteAFood = async (req, res)=>{
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
