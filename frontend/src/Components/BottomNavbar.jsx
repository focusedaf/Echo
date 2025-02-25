import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
const BottomNavbar = () => {
  return (
    <div className="fixed top-150  shadow-lg rounded-full px-15 py-3 z-50 backdrop-blur-sm bg-white/50">
      <ul className="flex gap-6 ">
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FaHome className="w-6 h-6 cursor-pointer" />
        </button>

        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FaMicrophone className="w-6 h-6" />
        </button>

        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FaScroll className="w-6 h-6" />
        </button>

        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FaChartLine className="w-6 h-6" />
        </button>

        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FaUser className="w-6 h-6" />
        </button>
      </ul>
    </div>
  );
}

export default BottomNavbar