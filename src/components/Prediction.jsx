
import React, { useState } from 'react';
import axios from 'axios';

function Prediction() {
  const [frequency, setFrequency] = useState('daily');
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
    // Reset dates when frequency changes
    if (event.target.value === 'daily') {
      setStartDate('');
      setEndDate('');
    } else if (event.target.value === 'weekly') {
      setDate('');
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const payload = {
        dateType: frequency,
        singleDate: frequency === 'daily' ? date : undefined,
        startDate: frequency === 'weekly' ? startDate : undefined,
        endDate: frequency === 'weekly' ? endDate : undefined,
      };

      const response = await axios.post('http://localhost:5000/forecasting', payload);
      setPredictions(response.data);
    } catch (error) {
      setError('Error fetching predictions. Please try again.');
      console.error('Error fetching predictions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-10">
      {/* Left side with paragraph */}
      <div className="md:w-1/2 md:pr-5 mb-6 md:mb-0">
        <p>
          This is a sample paragraph that will appear on the left side. You can add more text here
          to describe something or provide information to the user.
        </p>
      </div>

      {/* Right side with input boxes */}
      <div className="md:w-1/2 md:pl-5">
        {/* Select input for Daily, Weekly, Monthly */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frequency">
            Frequency
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={handleFrequencyChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Date input */}
        {frequency === 'daily' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        {/* Start and End Date inputs for Weekly */}
        {frequency === 'weekly' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </>
        )}

        {/* Predict button */}
        <div>
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Predict'}
          </button>
        </div>

        {/* Display results */}
        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Predictions</h3>
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
