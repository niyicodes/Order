import React from 'react';
import Food from '../assets/images/discount.png';

const Discount = () => {
  return (
    <div className="relative w-[350px] h-[300px] z-[1000] bg-cover bg-center" style={{ backgroundImage: `url(${Food})` }}>
      <div className="absolute right-4 top-0 bg-black bg-opacity-75 p-1 border-b-4">
        <p className="text-red-600 font-bold">-40%</p>
      </div>
      <div className="absolute bottom-4 left-4 ">
        <p className="text-black font-medium">Restaurant</p>
        <h4 className="text-black font-bold">Chef Burgers London</h4>
      </div>
    </div>
  );
};

export default Discount;
