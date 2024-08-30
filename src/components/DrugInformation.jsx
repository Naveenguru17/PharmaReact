import React from 'react';

function DrugInformation() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Drug Information</h1>
      
      <div className="space-y-8">
        {/* M01AB */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">M01AB - Anti-inflammatory Drugs</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to reduce inflammation and alleviate pain associated with conditions such as arthritis.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> M01AB includes non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen and naproxen.
          </p>
        </div>

        {/* M01AE */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">M01AE - Analgesic Drugs</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to relieve pain without affecting consciousness.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> M01AE includes drugs such as acetaminophen and opioids.
          </p>
        </div>

        {/* N02BA */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">N02BA - Pain Relievers</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These are used to manage pain from various conditions.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> N02BA includes opioid analgesics such as morphine and codeine.
          </p>
        </div>

        {/* N02BE */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">N02BE - Specific Pain Relievers</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are targeted for specific types of pain.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> N02BE includes certain opioid combinations and specialized formulations.
          </p>
        </div>

        {/* N05B */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">N05B - Psycholeptic Drugs</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to treat psychiatric conditions such as anxiety and insomnia.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> N05B includes sedatives, anxiolytics, and hypnotics.
          </p>
        </div>

        {/* N05C */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">N05C - Sedatives and Related Drugs</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to induce calmness and sleep.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> N05C includes benzodiazepines and other sedative-hypnotics.
          </p>
        </div>

        {/* R03 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">R03 - Respiratory System Drugs</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to treat respiratory conditions such as asthma and chronic obstructive pulmonary disease (COPD).
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> R03 includes bronchodilators and corticosteroids.
          </p>
        </div>

        {/* R06 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">R06 - Antihistamines</h2>
          <p className="mt-2 text-gray-600">
            <strong>Usage:</strong> These drugs are used to relieve allergy symptoms such as sneezing and itching.
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Details:</strong> R06 includes antihistamines like loratadine and cetirizine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrugInformation;
