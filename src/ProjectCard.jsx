import { Link } from "react-router-dom";

function ProjectCard({ image, title, description, link, accent }) {
  return (
    <Link
      to={link}
      className="group block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        ></div>
      </div>
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <span className="inline-flex items-center text-sm font-medium text-blue-600">
          View Project
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
