import React from 'react';
import { useNavigate } from 'react-router-dom';

const drugData = [
  { name: 'M01AB - Anti-inflammatory Drugs', info: 'Used to reduce inflammation and alleviate pain associated with conditions like arthritis.' },
  { name: 'M01AE - Analgesic Drugs', info: 'Relieves pain without affecting consciousness; used for mild to moderate pain.' },
  { name: 'N02BA - Pain Relievers', info: 'Manages pain from various conditions, including chronic pain and pain from injuries.' },
  { name: 'N02BE - Specific Pain Relievers', info: 'Targeted for specific types of pain, such as neuropathic pain or pain associated with cancer.' },
  { name: 'N05B - Psycholeptic Drugs', info: 'Treats psychiatric conditions such as anxiety, depression, and insomnia.' },
  { name: 'N05C - Sedatives and Related Drugs', info: 'Induces calmness and sleep, often prescribed for sleep disorders or severe anxiety.' },
  { name: 'R03 - Respiratory System Drugs', info: 'Treats respiratory conditions like asthma and chronic obstructive pulmonary disease (COPD).' },
  { name: 'R06 - Antihistamines', info: 'Relieves allergy symptoms such as sneezing, itching, and runny nose.' },
];

function DrugCards() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/druginformation');
  };

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12 text-center">Drugs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {drugData.map((drug, index) => (
          <div 
            key={index} 
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg cursor-pointer text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            onClick={handleClick}
          >
            <h2 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">{drug.name}</h2>
            <p className="text-gray-700">{drug.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrugCards;
