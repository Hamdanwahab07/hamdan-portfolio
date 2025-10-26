
import React from 'react';
import type { Education } from '../types/portfolio';

const EducationCard: React.FC<Education> = ({ degree, institution, location, period, details }) => {
  return (
    <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/40">
      <h3 className="text-xl font-bold text-white mb-1">{degree}</h3>
      <p className="text-md text-gray-300 font-semibold mb-2">{institution}</p>
      <p className="text-sm text-gray-500 mb-1">{location}</p>
      <p className="text-sm text-gray-400 mb-3">{period}</p>
      <p className="text-sm text-gray-300 bg-gray-700/50 inline-block px-2 py-1 rounded">{details}</p>
    </div>
  );
};

export default EducationCard;
