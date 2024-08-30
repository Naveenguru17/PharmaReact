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
    The Auto ARIMA (Auto-Regressive Integrated Moving Average) model is a sophisticated statistical tool designed for time series forecasting. It automates the process of selecting the best parameters for the ARIMA model, which includes differencing, autoregressive terms, and moving average terms. This model is particularly effective in handling complex time series data with seasonality and trends, as it adjusts to the data's intrinsic characteristics without requiring extensive manual tuning. By automating parameter selection and optimizing model parameters, Auto ARIMA simplifies the forecasting process and enhances the accuracy of predictions. It is a robust choice for various forecasting tasks where capturing temporal patterns and seasonal effects is crucial.
  </p>
  <h3 className="text-xl font-semibold text-blue-800 mt-4">Model Performance Overview</h3>
  <p className="text-lg text-gray-700">
    In our comprehensive analysis, we evaluated several forecasting models, including Seasonal Naive, Auto ARIMA, Prophet, and LSTM. The bar plot on the left provides a visual comparison of these models' performance, measured by Mean Absolute Percentage Error (MAPE). From the plot, it is evident that the Auto ARIMA model delivers the most accurate forecasts, evidenced by its lowest MAPE value. This result underscores Auto ARIMA's ability to effectively model the underlying data patterns and trends. The comparison highlights that while other models like Prophet and LSTM also perform well, Auto ARIMA consistently provides more reliable predictions, making it the preferred choice for our forecasting needs.
  </p>
</div>

    </div>
  );
}

export default Forecasting;
