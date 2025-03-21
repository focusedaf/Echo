import React, { useState } from 'react'
import { FaMicrophone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const BottomNavbar = () => {
  const [visible, setVisible] = useState(false);
  const onVisible = (buttonId) => {
    setVisible((prev) => ({
      ...prev,
      [buttonId]: !prev[buttonId], 
    }));
  };

  const buttons = [
    { id: 1, label: "Home", icon: <FaHome /> },
    { id: 2, label: "Microphone", icon: <FaMicrophone /> },
    { id: 3, label: "Predict Papers", icon: <FaScroll /> },
    { id: 4, label: "Progress Tracker", icon: <FaChartLine /> },
    { id: 5, label: "Profile", icon: <FaUser /> },
  ];
  return (
    <div className="fixed top-150  shadow-lg rounded-full px-5 py-3 z-50 backdrop-blur-sm bg-white/50">
      <ul className="flex gap-6 ">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => onVisible(btn.id)}
            className="p-2 hover:backdrop-blur-sm hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            {btn.icon }
            {visible[btn.id] && (
              <p className=" text-white">{btn.label}</p>
            )}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default BottomNavbar