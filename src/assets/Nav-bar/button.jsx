import React from 'react'

const button = () => {
    const navItems = ['Home', 'Shop', 'New Arrivals', 'About Us', 'Contact'];
     
    return (
      <div className='flex justify-around w-60 lg:w-120'> 
       
        {navItems.map((item, index) => (
            <button key={index+1} className='text-xs color-black-400 lg:text-lg'>
                  {item}
            </button>
        ))}
      </div>
      
    )


}

export default button