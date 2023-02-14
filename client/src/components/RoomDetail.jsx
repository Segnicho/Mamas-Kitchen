import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../api'
import foodImg from '../images/hero3.jpg' 

const RoomDetail = () => {
    const [food,setFood] = useState()
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    const params = useParams()
    const id =  params.id 
    console.log(food)
    useEffect(() => {
        const fetchAfood = async () => {
            const response = await axios.get(`${baseUrl}/foods/find/${id}`)
            setFood(response.data)
        }
        fetchAfood()
    },[id])

    const handleOrder = async () => {
        const order = await axios.post(`${baseUrl}/order`,...food,user._id)
        console.log(order.data)
    }
  return (
    <div className='w-screen h-screen bg-black/50 flex justify-center items-center'>
        { food && <div className='bg-white mt-8 p-10 rounded-md'>
            <img className='w-[50vh] h-[30vh] rounded-md' src={foodImg} alt='' />
            <h1 className='text-2xl mt-3'>{food.title}</h1>
             <div className='flex my-5'> 
                <h1>Number: </h1>
                <button className='ml-2 text-coral-500'>-</button>
                <h1 className='ml-2'>2</h1>
                <button className='ml-2'>+</button>
             </div>
            { user ?<button className='bg-blue-500  p-2 text-white rounded-md' onClick={handleOrder}>Order Now</button>: <Link to='/login' className='bg-blue-500  p-2 text-white rounded-md'>Login</Link>}
        </div>}
    </div>
  )
}

export default RoomDetail