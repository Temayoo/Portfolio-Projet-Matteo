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

      <div className="w-full h-[200vh] flex justify-center mt-20 pt-32 relative">
        {/* Ligne verticale centrale */}
        <svg
          className="h-[1400px] absolute left-1/2"
          width="6"
          height="1700"
          viewBox="0 0 6 1700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="3"
            y1="0"
            x2="3"
            y2="1700"
            stroke="#ffffff"
            strokeWidth="6"
          />
        </svg>

        {/* Étape 1 */}
        <div className="absolute top-[128px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 1
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[270px] text-white text-base text-right">
              <p>Je suis passionné de dev</p>
            </div>
            <img
              src={exampleImage}
              alt="Étape 1"
              className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Étape 2 */}
        <div className="absolute top-[408px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 2
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-base w-[270px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi.
            </div>
            <img
              src={exampleImage}
              alt="Étape 2"
              className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Étape 3 */}
        <div className="absolute top-[688px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 3
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[270px] text-white text-base text-right">
              <p>J’ai appris Tailwind CSS</p>
            </div>
            <img
              src={exampleImage}
              alt="Étape 3"
              className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Étape 4  */}
        <div className="absolute top-[968px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 4
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-base w-[270px]">
              <p>J’apprends aussi le design</p>
            </div>
            <img
              src={exampleImage}
              alt="Étape 4"
              className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Étape 5 */}
        <div className="absolute top-[1248px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute right-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 5
              </div>
            </div>
            <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-[270px] text-white text-base text-right">
              <p>Je développe mon portfolio</p>
            </div>
            <img
              src={exampleImage}
              alt="Étape 5"
              className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Étape 6  */}
        <div className="absolute top-[1528px] w-full flex justify-center">
          <div className="relative w-full max-w-[1000px]">
            <div className="absolute left-[25%] w-[30%] h-[4px] bg-white">
              <div className="absolute left-[40%] -top-[24px] text-white text-base whitespace-nowrap">
                Étape 6
              </div>
            </div>
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 text-white text-base w-[270px]">
              <p>Je me lance sur le marché</p>
            </div>
            <img
              src={exampleImage}
              alt="Étape 6"
              className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
