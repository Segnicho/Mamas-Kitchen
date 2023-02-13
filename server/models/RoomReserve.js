import mongoose from "mongoose";

const RoomReserveSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,

    },

    userId:{
        type:String 
    },
    capacity:{
        type:Number
    },

    reserved:{
        type:Boolean
    },
    price:{
        type:Number,
        required:true
    },
    
})


export default mongoose.model("RoomReserve", RoomReserveSchema);

