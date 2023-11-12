import React from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between py-4 px-10 items-center border  border-b-filter drop-shadow-0-3-7-rgba-0-0-0-10'>
        <img src={logo} alt="logo" className='h-12'/>
        <ul className='flex'>
            <li className='mr-5'>About Us</li>
            <li className='mr-5'>Services</li>
            <li className='mr-5'>Blog</li>
        </ul>
          <Button name='sign up'/>
      </nav>
    </header>
  )
}

export default Header