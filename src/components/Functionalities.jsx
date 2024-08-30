"use client";
import { Link } from 'react-router-dom';
import React from 'react';

function Functionalities() {
  return (
    <div className="p-6 min-h-screen mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Our Functionalities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Card 1: Model and Prediction */}
          <Link to="/forecasting">
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Model and Prediction</h3>
              <p className="text-gray-700 flex-grow">
                Predict future trends and sales with high accuracy using our sophisticated predictive analytics models.
              </p>
            </div>
          </Link>

          {/* Card 2: Dashboard */}
          <Link to="/dashboard">
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Dashboard</h3>
              <p className="text-gray-700 flex-grow">
                Visualize and manage your data through an intuitive dashboard that provides real-time insights and customizable reports.
              </p>
            </div>
          </Link>

          {/* Card 3: Drug Information */}
          <Link to="/druginformation">
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Drug Information</h3>
              <p className="text-gray-700 flex-grow">
                Access detailed information on all drugs with a comprehensive view that provides insights into drug categories, uses, and effects.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Functionalities;
