import React from 'react'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <div> 
    {/* <Outlet/> */}
    <SignIn/>

    </div>
    
  )
}

export default App