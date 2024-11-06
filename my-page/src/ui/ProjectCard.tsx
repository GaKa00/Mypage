//@ts-nocheck

const ProjectCard = ({
  title,
  tags,
  description,
  linkText,
  linkGit,

}) => {
  return (
    <div className="mb-4 bg-white bg-opacity-60 p-4 rounded-lg min-h-96 w-80 xs:min-h-40 shadow-md transition-transform transform hover:scale-105">
      <h3 className="font-bold text-xl cursor-pointer text-gray-800">
        {title}
      </h3>

      <div>
        <div className="flex flex-wrap justify-center items-center py-2 gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-900 text-sm  text-center mt-4">{description}</p>
        <a
          href={linkText}
          target="_blank"
          className="text-blue-700 mt-4 inline-block hover:underline"
        >
          Link to Project Webpage
        </a>
        <a
          href={linkGit}
          target="_blank"
          className="text-blue-700 mt-4 inline-block hover:underline"
        >
          Link to Github Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
