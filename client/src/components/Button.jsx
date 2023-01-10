import React from 'react'

const Button = ( props ) => {
  return (
    <div className='flex justify-center items-center'>
      <button className="w-[5rem] sm:w-[7rem] p-2 mx-5 my-2 bg-red-600  rounded-md text-white">{props.title}</button>
    </div>
  )
}

export default Button