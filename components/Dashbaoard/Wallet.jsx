"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaChartLine } from "react-icons/fa";

const Wallet = ({ title, amount }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="bg-[#2E8B57] text-white p-6 rounded-lg w-full flex justify-between items-center">
      <div>
        <div className="flex items-center gap-5 flex-row">
          <FaChartLine size={24} />

          <div className="">
          <span className="text-sm ">{title}</span>
          <p className="text-xl font-bold">
            {isHidden ? "₦ XXXXX.XX" : `₦ ${amount}`}
          </p>
        </div>
        </div>
   
      </div>

      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
      </button>
    </div>
  );
};

export default Wallet;
