import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Carousel = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "The Library",
      tags: ["React", "Node", "Chakra"],
      description: "",
      linkText: "Link to project",
      linkGit: "https://github.com/gkass/the-library",
    },
    {
      title: "The Wild Oasis",
      tags: ["React", "Node", "Tailwind"],
      description:
        "The Wild Oasis is an internal cabin booking system, built for an imaginary company. Originally a code-along project, I took the liberty to convert it into TypeScript.",
      linkText: "Link to project",
      linkGit: "https://github.com/gkass/the-wild-oasis",
    
    },
    {
      title: "The Wild Oasis - Customer Page",
      tags: ["React", "Node", "Tailwind", "Next.js"],
      description: "",
      linkText: "Link to project",
      linkGit: "https://github.com/gkass/the-wild-oasis-customer",
    },
  ];

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <ProjectCard
        title={projects[currentProjectIndex].title}
        tags={projects[currentProjectIndex].tags}
        description={projects[currentProjectIndex].description}
        linkText={projects[currentProjectIndex].linkText}
        linkGit={projects[currentProjectIndex].linkGit}
      />

      <div className="flex justify-between w-full mt-4 ">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
