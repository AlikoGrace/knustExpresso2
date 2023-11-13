import React from 'react'

const Footer = () => {
  return (
   <footer >
    <div className='grid grid-cols-5 gap-5 bg-[#1A1D1F] text-gray-100 place-items-center pb-20 pt-10'>
        <div className='grid gap-5 mb-10'>
        <p>About</p>
        <p>students resorces</p>
        <p>why us</p>
        </div>
        <div className='grid gap-5 mb-10'>
        <p>Support</p>
        <p>Help</p>
        <p>Faq</p>
        </div>
        <div className='grid gap-5 mb-10'>
        <p>Legal</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
        </div>
        <div className='grid gap-5 mb-10'>
            <p>Contacr</p>
            <p>0558344624</p>
            <p>gracealiko08@gmail.com</p>
        </div>
        <div className='grid gap-5 mb-10'>
            <p>Follow</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
        </div>
        <p> @2023 all rights reserved</p>
         
    </div>
   </footer>
  )
}

export default Footer