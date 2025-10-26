
import React from 'react';
import { LinkedInIcon, MailIcon } from './Icons';

interface FooterProps {
  social: {
    linkedin: string;
  };
  email: string;
  name: string;
}

const Footer: React.FC<FooterProps> = ({ social, email, name }) => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Contact Me</h3>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors duration-300">{email}</a>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
             <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <LinkedInIcon className="w-7 h-7" />
            </a>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <MailIcon className="w-7 h-7" />
            </a>
          </div>
          <div className="text-center md:text-right text-gray-500">
            <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
