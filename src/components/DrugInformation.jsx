import React from 'react';

function DrugInformation() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">Drug Information</h1>
      
      <div className="space-y-8">
        {/* M01AB */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">M01AB - Anti-inflammatory Drugs</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to reduce inflammation and alleviate pain associated with conditions such as arthritis. They are effective in treating symptoms like swelling and joint pain.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> M01AB includes non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen and naproxen. These medications work by inhibiting enzymes that contribute to inflammation and pain.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Ibuprofen, Naproxen, Indomethacin.
          </p>
        </div>

        {/* M01AE */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">M01AE - Analgesic Drugs</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to relieve pain without affecting consciousness. They are commonly used to manage mild to moderate pain.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> M01AE includes drugs such as acetaminophen and opioids. Acetaminophen is used for general pain relief, while opioids are used for more severe pain but have a risk of dependency.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Acetaminophen, Codeine, Oxycodone.
          </p>
        </div>

        {/* N02BA */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">N02BA - Pain Relievers</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These are used to manage pain from various conditions, including chronic pain and pain from injuries or surgeries.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> N02BA includes opioid analgesics such as morphine and codeine. These drugs are potent pain relievers that are often used when other pain medications are ineffective.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Morphine, Codeine, Fentanyl.
          </p>
        </div>

        {/* N02BE */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">N02BE - Specific Pain Relievers</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are targeted for specific types of pain, including neuropathic pain or pain associated with cancer.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> N02BE includes certain opioid combinations and specialized formulations designed for more targeted pain relief.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Oxycodone-Acetaminophen, Methadone.
          </p>
        </div>

        {/* N05B */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">N05B - Psycholeptic Drugs</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to treat psychiatric conditions such as anxiety, depression, and insomnia.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> N05B includes sedatives, anxiolytics, and hypnotics that help in managing symptoms related to mental health disorders.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Diazepam, Lorazepam, Clonazepam.
          </p>
        </div>

        {/* N05C */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">N05C - Sedatives and Related Drugs</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to induce calmness and sleep, and are often prescribed for sleep disorders or severe anxiety.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> N05C includes benzodiazepines and other sedative-hypnotics that act on the central nervous system to produce calming effects.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Alprazolam, Temazepam, Zolpidem.
          </p>
        </div>

        {/* R03 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">R03 - Respiratory System Drugs</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to treat respiratory conditions such as asthma and chronic obstructive pulmonary disease (COPD).
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> R03 includes bronchodilators that help open airways and corticosteroids that reduce inflammation in the lungs.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Salbutamol, Budesonide, Formoterol.
          </p>
        </div>

        {/* R06 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">R06 - Antihistamines</h2>
          <p className="text-gray-700">
            <strong>Usage:</strong> These drugs are used to relieve allergy symptoms such as sneezing, itching, and runny nose.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Details:</strong> R06 includes antihistamines that block histamine receptors, which reduces allergic reactions.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Common Examples:</strong> Loratadine, Cetirizine, Diphenhydramine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrugInformation;
