import Background from "../assets/PORTFOLIO.gif";
import { Link, useLocation } from "react-router-dom";
import Positioner from "../ui/Positioner";
import Carousel from "../ui/Carousel2";
import { useEffect, useState } from "react";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {


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

          {isPhone ? (
            <Carousel />
          ) : (
            <Positioner>
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description="The Library is  a Fullstack Application built with React in the Frontend, and Node in the backend.  A mix of Chakra and Tailwind was used for styling. The app is meant for  Warhammer Readers, to easily track what books they have read, as well as save their own quotes and summaries from their favourite books in one place."
                linkText="Link to project"
                linkGit="https://github.com/GaKa00/40kcompanion"
              />
              {/* <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              />
              <ProjectCard
                title="The Library"
                tags={["React", "Node", "Chakra"]}
                description=""
                linkText="Link to project"
              /> */}
            </Positioner>
          )}
        </div>
      </main>
    </div>
  );
};



export default Projects;
