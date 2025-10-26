
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 hover:text-white">
      {skill}
    </span>
  );
};

export default SkillBadge;
