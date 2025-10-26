import React, { useState, useEffect } from 'react';
import { LinkedInIcon, MailIcon } from './Icons';

interface NavLink {
  id: string;
  title: string;
}

interface HeaderProps {
  name: string;
  title: string;
  social: {
    linkedin: string;
  };
  navLinks: NavLink[];
}

const BackgroundAnimation = () => {
  const shapes = [
    { content: '</>', left: '10%', duration: '45s', delay: '0s', size: 'text-3xl' },
    { content: '{...}', left: '20%', duration: '55s', delay: '5s', size: 'text-4xl' },
    { content: '0101', left: '30%', duration: '50s', delay: '12s', size: 'text-2xl' },
    { content: '=>', left: '40%', duration: '60s', delay: '8s', size: 'text-3xl' },
    { content: '/*', left: '50%', duration: '42s', delay: '15s', size: 'text-2xl' },
    { content: '#include', left: '60%', duration: '58s', delay: '3s', size: 'text-xl' },
    { content: 'VPN', left: '70%', duration: '52s', delay: '18s', size: 'text-3xl' },
    { content: 'SQL', left: '80%', duration: '48s', delay: '9s', size: 'text-4xl' },
    { content: '0xFA', left: '90%', duration: '53s', delay: '2s', size: 'text-2xl' },
    { content: '()', left: '5%', duration: '62s', delay: '20s', size: 'text-3xl' },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <span
          key={index}
          className={`floating-shape font-mono ${shape.size}`}
          style={{
            left: shape.left,
            animationDuration: shape.duration,
            animationDelay: shape.delay,
          }}
        >
          {shape.content}
        </span>
      ))}
    </>
  );
}

const Header: React.FC<HeaderProps> = ({ name, title, social, navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-gray-800/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white tracking-wider">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{name.split(' ')[0]}</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {link.title}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-sm`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="text-gray-300 hover:text-white transition-colors duration-300">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
          <BackgroundAnimation />
        </div>
        <div className="text-center z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
            {name}
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-8">{title}</p>
          <div className="flex justify-center space-x-6">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a href={`mailto:hamdanabdulwahab360@gmail.com`} className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <MailIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;