import React from "react";
import gifArrowWhite from "../assets/gif/gifArrowWhite.gif";
import exampleImage from "../assets/pictures/me.png";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
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

      <div className="w-full h-[150vh] flex justify-center mt-20 relative">
        <svg
          className="h-[1000px] absolute left-1/2"
          width="2"
          height="1000"
          viewBox="0 0 2 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1000"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>
        <div className="">
          <div className="right-[calc(50%+50px)] top-[250px] text-right">
            <p className="text-white font-semibold text-xl font-SpaceMonoBoldItalic">
              2010 . .
            </p>
          </div>

          <div className="right-1/2 top-[280px] left-[500px]">
            <svg
              width="300"
              height="2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="300"
                y2="1"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="left-[275px] top-[170px]">
            <img
              src={exampleImage}
              alt="Image timeline 2010"
              className="w-[200px] h-[200px] object-cover"
            />
          </div>

          <div className="left-[calc(50%+100px)] top-[240px] w-[350px]">
            <p className="text-white font-normal text-base">
              Dès le plus jeune âge, j'ai développé une passion profonde pour
              les écrans et les jeux vidéo, ce qui a fortement influencé ma
              curiosité et mon intérêt pour l'univers digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
