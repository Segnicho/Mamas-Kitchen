import mongoose from "mongoose";

const RoomReserveSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true,

    },

    desc:{
        type:String,
        required:true,
    },

    capacity :{
        type:String,
        required:true,
    },

    
    bedNumber:{
        type:Number,
        required:true
    },
    branch: {
        type:Array
    },
    userId:{
        type:String
    }  

    
})


export default mongoose.model("RoomReserve", RoomReserveSchema);

