import React, { useState } from 'react';
import { data } from './data/data.js';
import { Link } from "react-router-dom";

const ItemsCards = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filtertime = (time) => {
    setFoods(
      data.filter((item) => {
        return item.time === time;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-blue-600 font-bold text-4xl text-center'>
      <Link className=' hover:text-green-600' to="/lost-items">Lost</Link>/<Link className=' hover:text-green-600' to="/found-items">Found</Link> Items List
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Items</p>
          <div className='flex justify-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('collegesupplies')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              College Supplies
            </button>
            <button
              onClick={() => filterType('gadgets')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Gadgets/Electronics
            </button>
            <button
              onClick={() => filterType('clothing')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Clothing/Accessories
            </button>
            <button
              onClick={() => filterType('miscellaneous')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Miscellaneous
            </button>
          </div>
        </div>

        {/* Filter by Time */}
        <div>
          <p className='font-bold text-gray-700'>Filter by Time</p>
          <div className='flex justify-between max-w-[400 px] w-full'>
            <button
              onClick={() => filtertime('Today')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Today
            </button>
            <button
              onClick={() => filtertime('Yesterday')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Yesterday
            </button>
            <button
              onClick={() => filtertime('A Week ago')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              A Week ago
            </button>
            <button
              onClick={() => filtertime('A Month ago')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              A Month ago
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-blue-500 text-white p-1 rounded-full'>
                  {item.time}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ItemsCards;

