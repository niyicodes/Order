import React from 'react';
import Food from '../assets/images/discount.png';

const JoinUs = () => {
  return (
    <div className="relative w-[350px] h-[300px] rounded-[5px] z-[1000]">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[5px]"
        style={{ backgroundImage: `url(${Food})`, filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-black opacity-30 rounded-[5px]" />
      <div className="p-4">
        <div className="absolute left-4 top-0 text-black bg-white p-2 rounded-b-[5px]">
          <p className="font-bold text-[12px]">Earn more with lower fees</p>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="text-[#FC8A06] font-medium">Signup as a business</p>
          <h4 className="text-white font-bold">Partner with us</h4>
          <button className="rounded-full mt-3 px-6 py-2 bg-[#FC8A06] text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
