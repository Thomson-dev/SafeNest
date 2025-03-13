import React from 'react'

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FinancialServices = ({ title, description, href }) => {
  return (
    <Link href={href} className="block">
      <div className="bg-[#e2fced] p-6 rounded-lg w-full flex justify-between items-center shadow-md cursor-pointer transition-transform hover:scale-105">
        <div>
          <h3 className="text-[#2E8B57] font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <FiChevronRight className="text-gray-500 text-xl" />
      </div>
    </Link>
  );
};

export default FinancialServices;
