const ProjectCard = ({
  title,
  tags,
  description,
  linkText,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="mb-4 bg-white bg-opacity-60 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3
        onClick={toggleExpand}
        className="font-bold text-xl cursor-pointer text-gray-800"
      >
        {title}
      </h3>
      {isExpanded && (
        <div>
          <div className="flex flex-wrap justify-center items-center py-2 gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1"
              >
                {tag}
              </span>
            ))}
          </div>
          {description && (
            <p className="text-gray-700 text-sm mt-4">{description}</p>
          )}
          <a
            href="#"
            className="text-blue-700 mt-4 inline-block hover:underline"
          >
            {linkText}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
