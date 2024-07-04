
import { Link, useLocation } from "react-router-dom";
import Background from "../assets/PORTFOLIO.gif";
import { useState } from "react";
const WorkXP = () => {

   const [showDetails, setShowDetails] = useState(false);
   const location = useLocation();

   const isActive = (path: string) => location.pathname === path;


   const handleMouseEnter = () => {
     setShowDetails(true);
   };

   const handleMouseLeave = () => {
     setShowDetails(false);
   };
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

          <section className="absolute top-20 right-0 m-8  flex flex-col items-evenly">
            <h3
              className="text-3xl font-semibold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Security Administrator
            </h3>

            {showDetails && (
              <>
                <h2 className="px-3">At the Swedish Parliament</h2>
                <ul className="m-5">
                  <li>
                    Experience: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.{" "}
                  </li>
                  <li>Duration: August 2022 - August 2023</li>
                </ul>
              </>
            )}
            <h3
              className="text-3xl font-semibold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Board Member
            </h3>
            {showDetails && (
              <>
                <h2 className="px-3">At Chas Academy</h2>
                <ul className="m-5">
                  <li>
                    Experience: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.{" "}
                  </li>
                  <li>Duration: January 2020 - December 2021</li>
                </ul>
              </>
            )}
            <h3
              className="text-3xl font-semibold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Class President
            </h3>
            {showDetails && (
              <>
                <h2 className="px-3">At Chas Academy</h2>
                <ul className="m-5">
                  <li>
                    Experience: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.{" "}
                  </li>
                  Duration: January 2020 - December 2021
                </ul>
                <li></li>
              </>
            )}
            <h3></h3>
            <h3></h3>
          </section>

          {/* add large experience list in right side */}
        </div>
      </main>
    </div>
  );
}

export default WorkXP
