import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../api'
import foodImg from '../images/hero3.jpg' 

const FoodDetail = () => {
    const [room,setroom] = useState()
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const params = useParams()
    const id =  params.id 
    useEffect(() => {
        const fetchAfood = async () => {
            const response = await axios.get(`${baseUrl}/rooms/find/${id}`)
            setroom(response.data)
        }
        fetchAfood()
        
    },[id])

    const handleOrder = async () => {
        try{
        const userId  = user._id
        const order = await axios.post(`${baseUrl}/order`,{...room,userId:userId})
        navigate('/order')
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <div className='w-screen h-screen bg-black/50 flex justify-center items-center'>
        { room && <div className='bg-white mt-8 p-10 rounded-md'>
            <img className='w-[50vh] h-[30vh] rounded-md' src={foodImg} alt='' />
            <h1 className='text-2xl mt-3'>{room.title}</h1>
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

export default FoodDetail