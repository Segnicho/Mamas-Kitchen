import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import authenticationRoute from './routes/auth.js'
import usersRoutes from './routes/user.js'
import roomsRoutes from './routes/room.js'
import foodsRoutes from './routes/food.js'
import cors from 'cors'
dotenv.config();

const app = express();



const connetDB = async () =>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })

        console.log("Connected to the database");

    } catch (err) {
        console.log(err);
    }
    
}



// Miidlewares
app.use(cors())
app.use(express.json());

app.use('/api/auth',authenticationRoute)
app.use('/api/users',usersRoutes)
app.use('/api/foods',foodsRoutes)
app.use('/api/rooms',roomsRoutes)






app.listen(5000, ()=>{
    connetDB();
    console.log("Backend Running");
})

