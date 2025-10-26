
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  Icon: React.ElementType;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, Icon, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 border-b border-gray-800 last:border-b-0">
      <div className="flex items-center mb-12">
        <Icon className="w-8 h-8 text-gray-400 mr-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
