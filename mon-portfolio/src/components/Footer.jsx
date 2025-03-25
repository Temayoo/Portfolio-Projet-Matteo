import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 text-white mb-32 ">
      <div className="w-full px-4">
        <div className="flex items-center">
          <div className="w-[80%] flex justify-start">
            <svg
              className="w-full h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 200 6"
            >
              <circle cx="-21" cy="3" r="1" />
              <line x1="-20" y1="3" x2="295" y2="3" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="w-[20%] text-center font-SpaceMono text-xl -ml-5">
            <p>PORTFOLIO 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
