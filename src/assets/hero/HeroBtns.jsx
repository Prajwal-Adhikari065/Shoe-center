import React from 'react'

const HeroBtns = () => {
    const highlights = ["Comfort", "Style", "Trendy"]
    
    return (
      // Added 'flex gap-3' to space the buttons evenly
      <div className="flex gap-3">
          {highlights.map((item, index) => (
              <button 
                key={index} 
               
                className='text-xs lg:text-lg bg-teal-600 rounded-full px-2 py-px border-<1>'
              > 
                  {item}
              </button>
          ))}
      </div>
    )
}

export default HeroBtns