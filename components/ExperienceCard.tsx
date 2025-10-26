
import React from 'react';
import type { Experience } from '../types/portfolio';

const ExperienceCard: React.FC<Experience> = ({ role, company, location, period, points }) => {
  return (
    <div className="group relative p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-800/30">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
            <h3 className="text-2xl font-bold text-white">{role}</h3>
            <p className="text-gray-400 md:text-right">{period}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 text-gray-500">
            <p className="text-lg text-gray-300">{company}</p>
            <p className="md:text-right">{location}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
            {points.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
  );
};

export default ExperienceCard;
