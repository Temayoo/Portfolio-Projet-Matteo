import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'ONLINE PORTFOLIO', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'BLOG', to: '/blog' },
    { label: 'EXPERIENCE', to: '/experience' },
    { label: 'PROJECTS', to: '/projects' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <header className="text-white top-0 w-full z-50 font-Balmy py-8">
      <nav className="flex items-center w-full px-8">
        <div className="flex items-center w-[80%] px-10 py-4">
          <div className="flex justify-between flex-1 text-xl">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              const isContact = item.label === 'CONTACT';
              const baseClasses = 'px-2 py-1 transition-all hover:text-gray-400';
              let finalClasses = baseClasses;
              if (isActive && isContact) {
                finalClasses += ' bg-[#d4a384] text-black';
              } else if (isContact) {
                finalClasses += ' text-[#d4a384]';
              } else if (isActive) {
                finalClasses += ' bg-[#d4a384] text-black';
              }
              return (
                <Link key={item.to} to={item.to} className={finalClasses}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[20%] flex justify-center items-center h-full px-3 py-4">
          <svg
            className="w-full h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 200 6"
          >
            <line x1="6" y1="3" x2="150" y2="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="153" cy="3" r="3" />
          </svg>
        </div>
      </nav>
      <div className="flex w-full justify-between m-0 p-0 pt-10">
        <div className="w-[35%] m-0 p-0 flex items-center justify-start">
          <svg
            className="w-full h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 200 6"
          >
            <line x1="0" y1="3" x2="175" y2="3" stroke="currentColor" strokeWidth="1" />
            <circle cx="178" cy="3" r="3" />
          </svg>
        </div>
        <div className="w-[20%] m-0 p-0 flex items-center justify-end">
          <svg
            className="w-full h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 200 6"
          >
            <circle cx="72" cy="3" r="3" />
            <line x1="200" y1="3" x2="75" y2="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
