import Room from "../models/Room.js";

export const getARoom = async(req, res) =>{
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json(err)
    }

}


export const getAllRooms = async (req, res)=>{
    try {
        const allRooms = await Room.find()
        res.status(200).json(allRooms)

    } catch (err) {
        res.status(500).json(err)
    }
}


export const updateRoom = async (req, res)=>{
        try {
            const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{
            $set:req.body
            },{
                new:true
            })
            res.status(200).json(updatedRoom);
        } catch (err) {
            next(err)
        }
    } 

export const deleteARoom = async (req, res)=>{
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
