import { useState, useEffect } from "react";
import { getProjectsAPI } from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Fallback static projects to display if backend has no projects or is offline
const FALLBACK_PROJECTS = [
  {
    _id: "fallback-1",
    title: "AkShop",
    description:
      "Developed a fully responsive e-commerce application using React.js with a component-based architecture for a seamless shopping experience across desktop and mobile devices. Implemented core e-commerce features including, product search, category filtering, shopping cart, and checkout workflow.Managed global application state using Redux Toolkit for cart.",
    technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://ak-shop-e-commerce-6a2k.vercel.app/",
    image: "", // fallback will render mock gradient/placeholder
  },
  {
    _id: "fallback-2",
    title: "WeatherApp",
    description:
      "Developed a simple weather application using React.js that allows users to search for weather information by city name. Integrated a Weather API to fetch and display real-time weather details such as temperature, weather condition, humidity, and wind speed. Designed a clean and responsive user interface using Tailwind CSS for a seamless experience across different devices.",
    technologies: ["React", "Tailwind CSS", "OpenWeather API", "JavaScript"],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://weather-app-eta-sandy-33.vercel.app/",
    image: "",
  },
  {
    _id: "fallback-3",
    title: "TodoApp",
    description:
      "Developed a responsive Todo application using React.js with a component-based architecture for efficient task management. Implemented complete CRUD functionality, allowing users to add, edit, delete, and manage task seamlessly. Utilized Local Storage to persist todo data, ensuring tasks remain available across browser sessions.",
    technologies: ["React", "CSS Modules", "LocalStorage"],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://todo-app-puce-omega.vercel.app/",
    image: "",
  },
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjectsAPI()
      .then((res) => {
        if (res && res.success && res.data && res.data.length > 0) {
          setProjects(res.data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch projects, using local fallbacks:", err);
        setProjects(FALLBACK_PROJECTS);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 border-t border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Projects
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const imageUrl = project.image
                ? project.image.startsWith("http")
                  ? project.image
                  : `http://localhost:5000/${project.image}`
                : null;

              return (
                <div
                  key={project._id}
                  className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col hover:border-gray-200 transition-colors"
                >
                  {/* Project Image */}
                  <div className="h-44 bg-gray-100 relative flex items-center justify-center border-b border-gray-100">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Handle broken image links gracefully
                          e.target.onerror = null;
                          e.target.style.display = "none";
                          e.target.parentNode.innerHTML =
                            '<span class="text-sm font-mono text-gray-400">&lt;Image Offline /&gt;</span>';
                        }}
                      />
                    ) : (
                      <div className="text-sm font-mono text-gray-400 uppercase tracking-wider select-none">
                        &lt;{project.title} /&gt;
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 border-t border-gray-50 pt-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
