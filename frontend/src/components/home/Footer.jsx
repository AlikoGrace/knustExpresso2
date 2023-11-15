import React from 'react'

const Footer = () => {
  return (
   <footer >
    <div className='lg:grid grid-cols-4 gap-5 bg-[#1A1D1F] text-gray-100 place-items-center p-20  text-center'>
        <div className='grid gap-5 mb-10'>
        <p>Support</p>
        <p>Help</p>
        <p>Legal</p>
        </div>
        <div className='grid gap-5 mb-10'>
        <p>Legal</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
        </div>
        <div className='grid gap-5 mb-10'>
            <p>Contact</p>
            <p>0558344624</p>
            <p>gracealiko08@gmail.com</p>
        </div>
        <div className='grid gap-5 mb-10'>
            <p>Follow</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
        </div>
        <p className='text-center'> @2023 all rights reserved</p>
         
    </div>
   </footer>
  )
}

export default Footer