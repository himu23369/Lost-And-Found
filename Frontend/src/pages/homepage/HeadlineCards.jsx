import React from 'react';
import { Link } from "react-router-dom";

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Lost Items Database</p>
          <p className='px-2'>Explore our database of lost items</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to="/lost-items">View Now</Link></button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='../images/1.png'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Found Items Gallery</p>
          <p className='px-2'>Discover recently found items</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to="/found-items">Explore Now</Link></button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='../images/2.png'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Report a Found Item</p>
          <p className='px-2'>Help reunite lost items with their owners</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to="/report-items">Report Now</Link></button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='../images/3.png'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
