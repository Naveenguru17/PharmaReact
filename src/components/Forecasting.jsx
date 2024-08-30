import React from 'react';
import { useNavigate } from 'react-router-dom';
import predictionImage from '../utils/plot.jpg'; // Ensure this path is correct for your project

function Forecasting() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Side */}
      <div className="flex-1 space-y-4 flex flex-col items-center">
        <img
          src={predictionImage} // Use the imported image
          alt="Prediction"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={() => navigate('/forecasting/prediction')}
          className="w-1/2 py-2 px-4 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition mt-4"
        >
          Check Prediction
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Auto ARIMA Model</h2>
        <p className="text-lg text-gray-700">
          The Auto ARIMA (Auto-Regressive Integrated Moving Average) model is a statistical approach used for time series forecasting. It automates the process of identifying the optimal parameters for the ARIMA model, which includes the order of differencing, autoregressive terms, and moving average terms.
        </p>
        <h3 className="text-xl font-semibold text-blue-800 mt-4">Why We Choose Auto ARIMA</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Automatic parameter selection reduces manual tuning efforts.</li>
          <li>Provides reliable forecasts by fitting the best model based on historical data.</li>
          <li>Handles seasonality and trends effectively, making it suitable for various time series data.</li>
        </ul>
      </div>
    </div>
  );
}

export default Forecasting;
