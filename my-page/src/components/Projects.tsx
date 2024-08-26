import Background from "../assets/PORTFOLIO.gif";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const Projects = () => {
  // Track which project is expanded
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Handle project expansion/collapse
  const toggleExpand = (projectId: string) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

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
            <Warhammer
              isExpanded={expandedProject === "Warhammer"}
              toggleExpand={() => toggleExpand("Warhammer")}
            />
            <Oasis
              isExpanded={expandedProject === "Oasis"}
              toggleExpand={() => toggleExpand("Oasis")}
            />
            <OasisCostumer
              isExpanded={expandedProject === "OasisCustomer"}
              toggleExpand={() => toggleExpand("OasisCustomer")}
            />
          </Positioner>
        </div>
      </main>
    </div>
  );
};

function Positioner({ children }: { children: React.ReactNode }) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isPhone
          ? "absolute flex flex-col gap-4 items-center left-4 right-4 bottom-2 overflow-y-auto max-h-1/2"
          : "absolute flex flex-col gap-10 right-4 top-4"
      }`}
    >
      {children}
    </div>
  );
}

const Warhammer = ({
  isExpanded,
  toggleExpand,
}: {
  isExpanded: boolean;
  toggleExpand: () => void;
}) => {
  return (
    <div>
      <h3 onClick={toggleExpand} className="font-bold text-xl cursor-pointer">
        The Library
      </h3>
      {isExpanded && (
        <div>
          <div className="flex flex-wrap justify-center items-center bg-white bg-opacity-60 py-2 ">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Node
            </span>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Chakra
            </span>
          </div>
          <p></p>
          <a>Link to project</a>
        </div>
      )}
    </div>
  );
};

const Oasis = ({
  isExpanded,
  toggleExpand,
}: {
  isExpanded: boolean;
  toggleExpand: () => void;
}) => {
  return (
    <div>
      <h3 onClick={toggleExpand} className="font-bold text-xl cursor-pointer">
        The Wild Oasis
      </h3>
      {isExpanded && (
        <div className=" bg-white bg-opacity-60 flex flex-col justify-evenly">
          <div className="flex flex-wrap justify-center items-center py-5">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Tailwind
            </span>
          </div>
          <p>
            The Wild Oasis is a internal cabin booking system, made for an
            imaginary company. This was a code along project, which i took the
            liberty to convert into typescript.
          </p>
          <a className="text-blue-700">Link to project</a>
        </div>
      )}
    </div>
  );
};

const OasisCostumer = ({
  isExpanded,
  toggleExpand,
}: {
  isExpanded: boolean;
  toggleExpand: () => void;
}) => {
  return (
    <div>
      <h3 onClick={toggleExpand} className="font-bold text-xl cursor-pointer">
        The Wild Oasis- Customer Page
      </h3>
      {isExpanded && (
        <div>
          <div className="flex flex-wrap justify-center items-center bg-white bg-opacity-60 py-2 ">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              React
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Node
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Tailwind
            </span>
            <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1">
              Next.JS
            </span>
          </div>
          <p></p>
          <a>Link to project</a>
        </div>
      )}
    </div>
  );
};

export default Projects;
