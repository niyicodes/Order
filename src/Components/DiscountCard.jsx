import React from 'react';
import Food from '../assets/images/discount.png';

const Discount = () => {
  return (
    <div className="relative w-[350px] h-[300px] rounded-[5px] z-[1000] bg-cover bg-center" style={{ backgroundImage: `url(${Food})` }}>
      <div className="absolute inset-0 bg-black opacity-30 rounded-[5px]" />
      <div className="absolute right-4 top-0 bg-black bg-opacity-75 p-2 rounded-b-[5px]">
        <p className="text-white font-bold text-[12px]">-40%</p>
      </div>
      <div className="absolute bottom-4 left-4 ">
        <p className="text-[#FC8A06] font-medium">Restaurant</p>
        <h4 className="text-white font-bold">Chef Burgers London</h4>
      </div>
    </div>
  );
};

export default Discount;
