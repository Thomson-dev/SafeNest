import { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function BalanceComponent() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="p-6 bg-[#2E8B57] rounded-2xl min-h-60 w-full  text-white">
      <div className="flex justify-between items-center">
        <p className="text-sm opacity-75">Naira Balance</p>
        <button onClick={() => setIsHidden(!isHidden)}>
          <FiEye className="h-5 w-5 text-white" />
        </button>
      </div>
      <h1 className="text-xl font-bold">
        {isHidden ? "₦ XXXXX.XX" : "₦ 18,187"}
        <span className="text-lg">{isHidden ? "" : ".94"}</span>
      </h1>
      <p className="text-gray-300 text-sm mt-2">0.00% inflow today</p>
      <div className="absolute top-4 right-4">⚡3</div>
    </div>
  );
}