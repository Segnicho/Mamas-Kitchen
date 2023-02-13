import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true,
    },

    userId:{
        type:String 
    },
    amount:{
        type:Number
    },
    status:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },

})


export default mongoose.model("FoodOrder", FoodOrderSchema);