import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavClass = (path) => {
    return location.pathname === path
      ? "text-primary font-bold cursor-pointer"
      : "hover:text-secondary hover:font-bold transition-all cursor-pointer";
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex p-4 items-center justify-between bg-blue-950 shadow-sm text-white">
        <div className="text-4xl font-bold">Pharma Pulse</div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-lg">
          <li
            onClick={() => navigate("/")}
            className={getNavClass("/")}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={getNavClass("/about")}
          >
            About us
          </li>
          <li
            onClick={() => navigate("/druginformation")}
            className={getNavClass("/druginformation")}
          >
            Drugs
          </li>
          <li
            onClick={() => navigate("/forecasting")}
            className={getNavClass("/forecasting")}
          >
            Forecasting
          </li>
          {/* <li
            onClick={() => navigate("/model")}
            className={getNavClass("/model")}
          >
            Model
          </li> */}
          <li
            onClick={() => navigate("/dashboard")}
            className={getNavClass("/dashboard")}
          >
            Dashboard
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-blue-900 flex flex-col items-center sm:hidden gap-4 p-4">
            <li
              onClick={() => navigate("/")}
              className={getNavClass("/")}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/about")}
              className={getNavClass("/about")}
            >
              About us
            </li>
            <li
              onClick={() => navigate("/druginformation")}
              className={getNavClass("/druginformation")}
            >
              Drugs
            </li>
            <li
              onClick={() => navigate("/forecasting")}
              className={getNavClass("/forecasting")}
            >
              Forecasting
            </li>
            {/* <li
              onClick={() => navigate("/model")}
              className={getNavClass("/model")}
            >
              Model
            </li> */}
            <li
              onClick={() => navigate("/dashboard")}
              className={getNavClass("/dashboard")}
            >
              Dashboard
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Header;
