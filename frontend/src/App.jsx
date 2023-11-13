import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div> 
    <Outlet/>

    </div>
    
  )
}

export default App