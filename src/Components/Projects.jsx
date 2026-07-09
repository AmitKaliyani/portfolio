import { useState, useEffect } from "react";
import { getProjectsAPI } from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AKSHOP from '../assets/Images/ecom.jpeg'
import TODO from '../assets/Images/todo.png'
import WEATHER from '../assets/Images/weather.jpeg'
import QUOTESHUB from "../assets/Images/quotes-hub.png"



// Fallback static projects to display if backend has no projects or is offline
// const FALLBACK_PROJECTS = [
//   {
//     _id: "fallback-1",
//     title: "Quotes Hub",
//     description: "	 Developed a full-stack quote sharing platform using React.js, Node.js, Express.js, and MongoDB, enabling users to create, edit, delete, like, save, and explore quotes shared by the community. Built secure RESTful APIs following the MVC architecture with separate User and Admin modules, implementing JWT-based authentication, Built a dedicated Admin Panel to moderate user-generated content, enabling administrators to approve or reject submitted quotes, manage users, and monitor platform activities.",

//     technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Node js", "Express js", "MongoDB", "JWT"],
//     githubLink: "https://github.com/AmitKaliyani",
//     liveLink: "https://quote-frontend-ten.vercel.app",
//     image: QUOTESHUB, // fallback will render mock gradient/placeholder
//   },
//   {
//     _id: "fallback-2",
//     title: "AkShop",
//     description:
//       "Developed a fully responsive e-commerce application using React.js with a component-based architecture for a seamless shopping experience across desktop and mobile devices. Implemented core e-commerce features including, product search, category filtering, shopping cart, and checkout workflow.Managed global application state using Redux Toolkit for cart.",
//     technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
//     githubLink: "https://github.com/AmitKaliyani",
//     liveLink: "https://ak-shop-e-commerce-6a2k.vercel.app/",
//     image: AKSHOP, // fallback will render mock gradient/placeholder
//   },
//   {
//     _id: "fallback-3",
//     title: "WeatherApp",
//     description:
//       "Developed a simple weather application using React.js that allows users to search for weather information by city name. Integrated a Weather API to fetch and display real-time weather details such as temperature, weather condition, humidity, and wind speed. Designed a clean and responsive user interface using Tailwind CSS for a seamless experience across different devices.",
//     technologies: ["React", "Tailwind CSS", "OpenWeather API", "JavaScript"],
//     githubLink: "https://github.com/AmitKaliyani",
//     liveLink: "https://weather-app-eta-sandy-33.vercel.app/",
//     image: WEATHER,
//   },
//   {
//     _id: "fallback-4",
//     title: "TodoApp",
//     description:
//       "Developed a responsive Todo application using React.js with a component-based architecture for efficient task management. Implemented complete CRUD functionality, allowing users to add, edit, delete, and manage task seamlessly. Utilized Local Storage to persist todo data, ensuring tasks remain available across browser sessions.",
//     technologies: ["React", "CSS Modules", "LocalStorage"],
//     githubLink: "https://github.com/AmitKaliyani",
//     liveLink: "https://todo-app-puce-omega.vercel.app/",
//     image: TODO,
//   },
// ];


const FALLBACK_PROJECTS = [
  {
    _id: "fallback-1",
    title: "Quotes Hub",
    description:
      "A full-stack quote sharing platform with authentication, admin panel, and CRUD features.",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://quote-frontend-ten.vercel.app",
    HLD: "https://github.com/AmitKaliyani/06_quote_backend/blob/main/Readme.md",

    image: QUOTESHUB,
  },
  {
    _id: "fallback-2",
    title: "AkShop",
    description:
      "A responsive e-commerce application with product search, cart, and checkout features.",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://ak-shop-e-commerce-6a2k.vercel.app/",
    image: AKSHOP,
  },
  {
    _id: "fallback-3",
    title: "Weather App",
    description:
      "A weather application that displays real-time weather information using the OpenWeather API.",
    technologies: [
      "React",
      "Tailwind CSS",
      "OpenWeather API",
      "JavaScript",
    ],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://weather-app-eta-sandy-33.vercel.app/",
    image: WEATHER,
  },
  {
    _id: "fallback-4",
    title: "Todo App",
    description:
      "A simple task management application with CRUD operations and Local Storage support.",
    technologies: [
      "React",
      "Tailwind CSS",
      "LocalStorage",
    ],
    githubLink: "https://github.com/AmitKaliyani",
    liveLink: "https://todo-app-puce-omega.vercel.app/",
    image: TODO,
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
      className="py-24 bg-[#111827] border-t border-b border-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              let imageUrl = null;
              if (project.image) {
                const isAbsoluteOrLocal =
                  project.image.startsWith("http") ||
                  project.image.startsWith("/") ||
                  project.image.startsWith("data:");

                if (isAbsoluteOrLocal) {
                  imageUrl = project.image;
                } else {
                  const isLocal = typeof window !== 'undefined' &&
                    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

                  const baseApi = import.meta.env.VITE_API_URL || (isLocal ? 'http://localhost:5000/api' : '');
                  if (baseApi) {
                    const baseBackendUrl = baseApi.replace(/\/api$/, '');
                    imageUrl = `${baseBackendUrl}/${project.image}`;
                  }
                }
              }

              return (
                <div
                  key={project._id}
                  className="group bg-[#0B0F19] border border-slate-800/80 rounded-lg shadow-xl overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-[#151D30] relative flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Handle broken image links gracefully
                          e.target.onerror = null;
                          e.target.style.display = "none";
                          const parent = e.target.parentNode;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-slate-900 to-[#0B0F19] flex flex-col items-center justify-center p-4 text-center">
                                <span class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">${project.title}</span>
                                <span class="text-[10px] text-slate-500 font-mono">Image Offline</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-950/50 to-[#0B0F19] flex items-center justify-center select-none">
                        <div className="text-indigo-400/70 font-semibold tracking-wider text-base uppercase">
                          &lt;{project.title} /&gt;
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-indigo-950/60 text-indigo-300 text-xs font-semibold px-2 py-0.5 rounded border border-indigo-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 border-t border-slate-800/60 pt-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-indigo-400 font-medium transition-colors"
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
                          className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-indigo-400 font-medium transition-colors"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.HLD && (
                        <a
                          href={project.HLD}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-indigo-400 font-medium transition-colors"
                        >
                          <FaExternalLinkAlt />
                          <span>HLD</span>
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
