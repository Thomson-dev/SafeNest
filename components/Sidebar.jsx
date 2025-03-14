'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaPiggyBank, FaWallet, FaChartLine, FaMoneyCheckAlt, FaCreditCard, FaUsers, FaUser, FaInfoCircle, FaSignOutAlt, FaCommentDots } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Savings", icon: <FaPiggyBank />, path: "/dashboard/savings" },
   
    // { name: "Insurance", icon: <FaChartLine />, path: "/dashboard/insurance" },
    // { name: "Loan", icon: <FaMoneyCheckAlt />, path: "/loan" },
 

    { name: "Account", icon: <FaUser />, path: "/account" },
    { name: "Portfolio", icon: <FaChartLine />, path: "/portfolio" },
    { name: "About SafeNest", icon: <FaInfoCircle />, path: "/about" },
    { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
  ];

  return (
    <div className="w-64 min-h-screen hidden md:block bg-white border-r p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
      <Link href="/">
          <h1 className="text-2xl text-center font-bold cursor-pointer">SafeNest</h1>
        </Link>
      </div>

      {/* Menu Items */}
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActive(item.name);
              router.push(item.path);
            }}
            className={`flex items-center w-full mt-3  text-left px-4 py-4 rounded-lg transition-colors ${
              active === item.name ? "bg-[#e2fced] font-bold" : "hover:bg-gray-100"
            }`}
          >
            <span className="text-lg text-gray-700">{item.icon}</span>
            <span className="ml-4 text-gray-700">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Chat Icon */}
      <div className="absolute bottom-4 left-4 bg-[#2E8B57] text-white p-3 rounded-full cursor-pointer">
        <FaCommentDots size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
