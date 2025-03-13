'use client';
import React from 'react';
import { FaBell, FaRegUserCircle, } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between  p-4 px-10 bg-white ">
      {/* Left Section - Profile */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[#e2fced] flex items-center justify-center">
          <FaRegUserCircle className="text-[#7fc49c] text-2xl" />
        </div>
        <h2 className="text-gray-700 text-lg">Hello,</h2>
        {/* <FaHandWave className="text-purple-800 text-lg" /> */}
      </div>

      {/* Right Section - Notification Bell */}
      <div className="cursor-pointer text-gray-700 text-xl">
        <FaBell />
      </div>
    </div>
  );
};

export default DashboardNavbar;