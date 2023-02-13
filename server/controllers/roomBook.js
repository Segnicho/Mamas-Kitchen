import RoomReserve from "../models/RoomReserve.js";

export const bookRoom = async (req, res) =>{
    const reserve = new RoomReserve(req.body)
    try {
        await reserve.save()
        res.status(201).json("placed your order")
    } catch (err) {
        console.log(err);
    }
}

export const getBookedRooms = async (req, res) =>{
    try {
        const rooms = await RoomReserve.find({userId:req.params.userId})
        res.status(200).json(rooms)
    } catch (err) {
        res.status(501).json(err)
    }
}