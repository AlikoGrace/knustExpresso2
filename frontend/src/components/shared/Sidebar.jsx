import React from 'react'
import Button from './Button'
import { useState } from 'react';
import { IoClose,IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const [showSidebar, setShowSidebar]=useState(false)
    return (
          
      <>
      {
        !showSidebar?
        (   
            <button className=' z-30 flex items-center cursor-pointer right-10 top-6' onClick={() => setShowSidebar(!showSidebar)}>
              <IoMenu size={30}/>
            </button>
        ):
        (
            <button className='fixed top-5 right-10 text-black z-10' 
                 onClick={()=>setShowSidebar(!showSidebar)}
                >
                    <IoClose size={30}/>
                </button> 
        )
        
      }
       <div className={`top-0 right-0 fixed bg-slate-100 h-full w-[50vw] p-10 ${showSidebar? 
            'translate-x-0':'translate-x-full'} ease-in-out duration-300`}>
               
            <div className='flex flex-col'>
              <ul className='flex flex-col'>
                <li className='mb-10 hover:text-gray-600 duration-500 cursor-pointer'>About Us</li>
                <li className='mb-10 hover:text-gray-600 duration-500 cursor-pointer'>Services</li>
                <li className='mb-10 hover:text-gray-600 duration-500 cursor-pointer'>Blog</li>
              </ul>
              <Button className='mt-4 text-sm btn-s' name='sign up' />
            </div>
          </div>
      </>
    );
  };
  
  export default Sidebar;
  