import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import foodImg from '../images/hero4.jpg'
import { baseUrl } from '../api'

const Order = () => {
    const [orders,setOrders] = useState()
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(orders)
    useEffect(() => {
        const fetchAfood = async () => {
            const userId = user._id
            const response = await axios.get(`${baseUrl}/order/${userId}`)
            console.log(response.data)
            setOrders(response.data)
        }
        fetchAfood()
    },[])

  return (
    <div className="grid md:grid-cols-2 items-center h-screen  justify-center gap-10 mx-3 cursor-pointer bg-red">
    {orders && orders.map((order, indx) => (
        <div
        key={indx}
        data-aos="fade-up"
            data-aos-delay={indx * 400}
        className="bg-white flex p-3 max-w-[60vh] rounded-md gap-6 h-[10rem]"
      >
        <div>
          <h1 className="text-2xl">{order.title}</h1>
          <p className="my-3">{order.desc}</p>
          <div className="flex justify-between">
            <h1>${order.price}</h1>
            {order.rating}
          </div>
        </div>
        <div>
          <img
            className="w-[40vh] h-[100%] object-cover"
            src={foodImg}
            alt=""
          />
        </div>
      </div>
    ))}
    {!orders && <div className='h-screen flex justify-center items-center'>
        <h1 className='text-3xl'>you have no orders</h1>
        </div>}
  </div>
  )
}

export default Order