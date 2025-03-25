import React from 'react';

const About = () => {
  return (
    <div className="w-full h-[200px] flex justify-center">
      <div className="w-[40%]">
        <p className="pl-[160px] pt-10 font-SpaceMonoBoldItalic text-2xl w-[70%] text-center text-white">
          WELL, WE SHOULD START <span className="text-[#d4a384]"> HERE</span>
        </p>

      </div>
      <div className="w-[60%] relative">
        <p className="absolute left-20 -top-10 font-LeagueSpartanBold text-7xl text-white w-[60%]">
          First, let’s talk about me
        </p>
      </div>
    </div>
  );
};

export default About;
