import React from 'react';
import gifArrowWhite from '../assets/gif/gifArrowWhite.gif';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center relative">

      {/* Partie actuelle (haut) */}
      <div className="w-full h-[100px] flex justify-center ">
        <div className="w-[40%] relative"> 
          <p className="pl-[160px] pt-10 font-SpaceMonoBoldItalic text-2xl w-[70%] text-center text-white">
            WELL, WE SHOULD START <span className="text-[#d4a384]">HERE</span>
          </p>
          <img 
            src={gifArrowWhite} 
            alt="Animated arrow"
            className="w-[120px] h-auto absolute top-[70px] left-[375px]"  
          />
        </div>
        <div className="w-[60%] relative">
          <p className="absolute left-20 -top-10 font-LeagueSpartanBold text-7xl text-white w-[60%]">
            First, let’s talk about me
          </p>
        </div>
      </div>

      {/* Ligne verticale centrale */}
      <div className="w-full flex justify-center mt-20 relative">
        <svg 
          className="h-[1000px]" 
          width="2" 
          height="1000" 
          viewBox="0 0 2 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="0" x2="1" y2="1000" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Texte à gauche : année 2010 */}
        <div className="absolute right-[calc(50%+50px)] top-[250px] text-right">
          <p className="text-white font-semibold text-xl">2010 . .</p>
        </div>

        {/* Ligne horizontale reliée à la barre verticale sous 2010 */}
        <div className="absolute right-1/2 top-[280px] left-[300px]">
          <svg width="500" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="1" x2="500" y2="1" stroke="#ffffff" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
