import React from 'react';
import Header from './Header';
import Functionalities from './Functionalities';
import ChatBot from './ChatBot';
import DrugCards from './DrugCards';

function Home() {
  return (
    <div>
      <Header />
      <div className="p-6 bg-gray-200 min-h-screen"> 
        <div className="bg-gray-50 p-10">
          <div className="ml-8 mx-auto">
            <div className="text-4xl font-bold mb-4 text-blue-900">About Us</div>
            <div className="text-lg leading-relaxed text-gray-700">
              At Pharma Pulse, we specialize in data-driven insights that empower
              pharmaceutical companies to optimize their sales strategies and
              understand market trends. Our comprehensive sales data, spanning
              multiple pharmaceutical categories such as MO1AB, NO2BA, R03, and
              others, helps industry professionals gain an in-depth understanding of
              daily and seasonal sales patterns.
            </div>
          </div>

          <Functionalities />
          <DrugCards />
          <ChatBot />
        </div>
      </div>
    </div>
  );
}

export default Home;
