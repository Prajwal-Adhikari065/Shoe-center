import React from 'react'
import logo from '../logo.png';
import Btn from './button.jsx'
const navbar = () => {
  return (
    <div className="nav-container flex justify-between  pr-4 items-center h-16 w-screen ">
     <div className="logo ">
       <img src={logo} alt="logo" className='h-16' />
     </div>
     <div className="navBtns ">
              <Btn/>        
     </div>
 
    </div>
  )
}

export default navbar