import React from 'react';
import heroImage from "../hero/hero.png";
import HeroBtns from './HeroBtns'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icon directly
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div 
      className="h-56 lg:h-96  w-full bg-cover lg:bg-cover bg-center flex flex-col justify-center px-8 md:px-16" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-md space-y-2">
        <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 tracking-tight">
          Reimagined
        </h1>
        
        <h2 className="text-3xl lg:text-5xl font-bold text-teal-800">
          Comfort
        </h2>
        
        <p className="text-sm text-gray-700 lg:text-xl leading-relaxed py-2">
          Step into the future of footwear.
        </p>

      
      </div>
        <div className="pt-2">
          <HeroBtns />
        </div>

      <a href="#" className='inline-flex items-center lg:text-xl gap-2 bg-teal-800 text-white px-5 py-2 rounded-full mt-2 w-fit'>
          Explore     
          {/* Use the imported icon variable directly */}
          <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default Hero;