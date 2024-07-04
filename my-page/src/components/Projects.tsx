import WARHAMMERIMAGE from "../assets/Warhammer.png"

import Background from "../assets/PORTFOLIO.gif";
import { Link, useLocation } from "react-router-dom";
const Projects= () => {

   const location = useLocation();

   const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative h-screen flex justify-center items-center p-4 sm:p-6">
      <main className="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          <img
            src={Background}
            alt="Background"
            className="w-full h-auto max-h-full object-cover flex-grow"
          />
          <section className="absolute top-0 left-0 w-full p-4 sm:p-8 flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-2xl sm:text-3xl text-center sm:text-left">
              Gabriel Kassarp
            </h1>
            <h3 className="text-base sm:text-lg text-center sm:text-left">
              Fullstack Developer
            </h3>
            <ul className="mt-10 sm:mt-40 space-y-3 sm:space-y-5 flex flex-col items-center sm:items-start">
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/projects")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/experience")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/experience"
              >
                Experience
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/about") ? "bg-black text-white" : "hover:bg-white"
                }`}
                to="/about"
              >
                About Me
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/contact")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </ul>
          </section>

          <Positioner>
            <Warhammer />
            <Snapgram />
            <Oasis />
            <AccessAbility />
          </Positioner>
        </div>
      </main>
    </div>
  );
};

function Positioner({children}: {children: React.ReactNode}) {
  return (
    <div className="absolute flex flex-col gap-10 right-4 top-4">
      {children}
    </div>
  );
}




const Warhammer = () => {
  return (
    <article className="relative max-w-xs rounded overflow-hidden ">
      <div className="group relative">
        <img
          className="w-full h-full object-cover"
          src={WARHAMMERIMAGE}
          alt="Warhammer Art"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-center items-center bg-black bg-opacity-50 py-2">
            <div className="font-bold text-xl text-center text-white">
              Warhammer Reading Companion
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center bg-black bg-opacity-50 py-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Tailwind
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-black text-base px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        
        </div>
      </div>
    </article>
  );
};

const Oasis = () => {
  return (
    <article className="relative max-w-xs rounded overflow-hidden">
      <div className="group relative">
        <img
          className="w-full h-full object-cover"
          src={WARHAMMERIMAGE}
          alt="Warhammer Art"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-center items-center bg-black bg-opacity-50 py-2">
            <div className="font-bold text-xl text-center text-white">
              Oasis
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center bg-black bg-opacity-50 py-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Tailwind
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-black text-base px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </div>
      </div>
      
    </article>
  );
};

const Snapgram = () => {
  return (
    <article className="relative max-w-xs rounded overflow-hidden ">
      <div className="group relative">
        <img
          className="w-full h-full object-cover"
          src={WARHAMMERIMAGE}
          alt="Warhammer Art"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-center items-center bg-black bg-opacity-50 py-2">
            <div className="font-bold text-xl text-center text-white">
             Snapgram
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center bg-black bg-opacity-50 py-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Tailwind
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-black text-base px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </div>
      </div>
    
    </article>
  );
};

const AccessAbility = () => {
  return (
    <article className="relative max-w-xs rounded overflow-hidden ">
      <div className="group relative">
        <img
          className="w-full h-full object-cover"
          src={WARHAMMERIMAGE}
          alt="Warhammer Art"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-center items-center bg-black bg-opacity-50 py-2">
            <div className="font-bold text-xl text-center text-white">
             Access-Ability
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center bg-black bg-opacity-50 py-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              #Tailwind
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-black text-base px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </div>
      </div>
   
    </article>
  );
};

export default Projects