import React from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between py-4 px-10 items-center border  border-b-filter drop-shadow-0-3-7-rgba-0-0-0-10'>
        <img src={logo} alt="logo" className='h-12'/>
        <div className='hidden md:flex justify-between items-center'>
        <ul className='flex'>
            <li className='mr-5  hover:text-gray-600 duration-500 cursor-pointer'>About Us</li>
            <li className='mr-5 hover:text-gray-600 duration-500 cursor-pointer'>Services</li>
            <li className='mr-5 hover:text-gray-600 duration-500 cursor-pointer'>Blog</li>
        </ul>
          <Button name='sign up'/>
          </div>
          <div className='md:hidden'>
           <Sidebar/>
          </div>
      </nav>
    </header>
  )
}

export default Header