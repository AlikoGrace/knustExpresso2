import React from 'react'

const Button = (props) => {
  return (
    <button className='border border-yellow-500 bg-white px-10 py-4 text-black rounded-md shadow-sm'>
       {props.name}
    </button>
  )
}

export default Button