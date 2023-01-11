import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true,

    },

    desc:{
        type:String,
        required:true,
        unique:true
    },

    category:{
        type:Array
    },

    price:{
        type:Number,
        required:true
    },

    branch: {
        type:Array
    }

})


export default mongoose.model("User", FoodSchema);

