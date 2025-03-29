import React from "react";
import gifArrowWhite from "../assets/gif/gifArrowWhite.gif";
import exampleImage from "../assets/pictures/me.png";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      {/* En-tête */}
      <div className="w-full h-[100px] flex justify-center">
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

      <div className="w-full h-[200vh] flex justify-center mt-20 relative">
        {/* Ligne verticale centrale */}
        <svg
          className="h-[1500px] absolute left-1/2"
          width="2"
          height="1500"
          viewBox="0 0 2 1500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1500"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>

        {/* Étape 1 - Droite */}
        <div className="absolute top-0 w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 1
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[250px] text-white text-sm text-right">
              <p>Je suis passionné de dev</p>
            </div>
          </div>
        </div>

        {/* Étape 2 - Gauche */}
        <div className="absolute top-[250px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 2
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-sm w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
              nisl ac aliquet pretium.
            </div>
          </div>
        </div>

        {/* Étape 3 - Droite */}
        <div className="absolute top-[500px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 3
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[250px] text-white text-sm text-right">
              <p>J’ai appris Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Étape 4 - Gauche */}
        <div className="absolute top-[750px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 4
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-sm w-[250px]">
              <p>J’apprends aussi le design</p>
            </div>
          </div>
        </div>

        {/* Étape 5 - Droite */}
        <div className="absolute top-[1000px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 5
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[250px] text-white text-sm text-right">
              <p>Je développe mon portfolio</p>
            </div>
          </div>
        </div>

        {/* Étape 6 - Gauche */}
        <div className="absolute top-[1250px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[30%] w-[25%] h-[2px] bg-white">
              <div className="absolute left-[40%] -top-[20px] text-white text-sm whitespace-nowrap">
                Étape 6
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-sm w-[250px]">
              <p>Je me lance sur le marché</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
