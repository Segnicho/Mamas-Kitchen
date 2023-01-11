import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true,

    },

    desc:{
        type:String,
        required:true,
        unique:true
    },

    capacity :{
        type:String,
        required:true,
        unique:true
    },
    
    bedNumber:{
        type:Number,
        required:true
    },
    branch: {
        type:Array
        
    }

})


export default mongoose.model("Room", RoomSchema);

