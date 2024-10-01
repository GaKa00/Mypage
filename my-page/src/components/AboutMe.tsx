import { useLocation, Link } from 'react-router-dom';
import Background from '../assets/PORTFOLIO.gif'

import PositionerCenter from '../ui/PositionerCenter';

const About = () => {
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
        <PositionerCenter>

          <div className="flex flex-col items-center justify-center bg-slate-100 opacity-90 shadow-xl max-w-screen-lg rounded-lg  p-6 z-10">
            <h2 className="font-bold text-2xl sm:text-4xl mb-4 text-gray-800">
              About Me
            </h2>
            <div className="text-center">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                Hello, and welcome to my page! My name is Gabriel, a Junior
                Fullstack Developer based in Stockholm, Sweden. I am 24 years
                old, and I enjoy cooking, watching horror movies, and immersing
                myself in fantasy and sci-fi media like Warhammer, Lord of the
                Rings, and Dungeons & Dragons.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                Both in my professional and personal life, I am known for
                getting things done. I embrace challenges with a positive
                attitude and a willingness to learn from my mistakes. Although I
                am a junior developer, I am always eager to tackle new problems
                and grow my skills.
              </p>
              <p className="font-bold text-gray-800 text-base sm:text-lg">
                I look forward to working with you!
              </p>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                // Gabriel
              </p>
            </div>
          </div>
        </PositionerCenter>
        </div>
      </main>
    </div>
  );
}

export default About