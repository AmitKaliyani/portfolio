import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        {
          name: "JavaScript (ES6+)",
          icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded-sm" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-[#000000]" /> },
        {
          name: "REST APIs",
          icon: (
            <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-1 py-0.5 rounded">
              API
            </span>
          ),
        },
        {
          name: "JWT Auth",
          icon: <SiJsonwebtokens className="text-[#000000]" />,
        },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        {
          name: "Mongoose ORM",
          icon: (
            <span className="text-xs font-mono font-bold bg-red-100 text-red-800 px-1 py-0.5 rounded">
              DB
            </span>
          ),
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            My Skillset
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-gray-50 border border-gray-100 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center space-x-2.5 text-gray-700 text-sm font-medium"
                  >
                    <span className="text-lg flex-shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
