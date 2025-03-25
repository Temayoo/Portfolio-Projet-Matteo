import React from 'react';
import me from '../assets/pictures/me.png';

const Home = () => {
  return (
    <div>
      <div className="w-full h-[500px] mx-auto flex  ">
        <div className="w-[50%] h-full flex-col justify-center pl-40 pt-10">
          <p className="font-SpaceMonoBoldItalic text-[#d4a384] text-base">Welcome...</p>
          <h2 className="text-white font-LeagueSpartanBold text-8xl pt-5">RIVA</h2>
          <h2 className="text-white font-LeagueSpartanBold text-8xl">Matteo . . .</h2>
          <div className="flex items-center">
          <p className="bg-[#d4a384] text-black font-SpaceMonoBoldItalic px-20 py-1 mt-5">WEB DEVELOPMENT</p>
          </div>
          <p className='text-white text-base pt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa 
            sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium. 
            Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, 
            suscipit vestibulum velit quam nec nibh. 
          </p>
        </div>

        <div className="w-[50%] h-full  flex items-center justify-center">
        <img src={me} alt="Me" className="w-[32rem] h-auto rounded-full" />

        </div>

      </div>

    </div>
  );
};

export default Home;
