import React from 'react'
import logo from '../../assets/images/logo.png'
import Button from './Button'
import Sidebar from './Sidebar'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <header >
      <nav className='flex  justify-between py-4 px-10 items-center border  border-b-filter drop-shadow-0-3-7-rgba-0-0-0-10'>
        <img src={logo} alt="logo" className='h-12'/>
        <div className='hidden md:flex justify-between items-center'>
        <ul className='flex'>
            <li className='mr-5  hover:text-gray-600 duration-500 cursor-pointer'><Link to='about' >About Us</Link></li>
            <li className='mr-5 hover:text-gray-600 duration-500 cursor-pointer'><Link to='services' >Services</Link></li>
            <li className='mr-5 hover:text-gray-600 duration-500 cursor-pointer'><Link to='community' >community</Link></li>
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

export default Nav