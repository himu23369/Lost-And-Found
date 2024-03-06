import React from 'react';
import tietImage from './tiet.png'; // Assuming tiet.jpeg is in the same folder as this component

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold'>Find What's <span className='text-blue-500'>Lost</span>,</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold'> Reclaim What's <span className='text-blue-500'>Found</span>.</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold'> Your Items, Our Priority.</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={tietImage} alt="" />
        </div>
    </div>
  );
}

export default Hero;
