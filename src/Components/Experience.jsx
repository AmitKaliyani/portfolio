function Experience() {
  const experiences = [
    {
      role: "Full Stack MERN Developer",
      company:
        "Mentored By- SDE3 at Twillio (Ghanshyam Dobariya) / Self-Directed",
      period: "March-2025 - Present",
      bullets: [
        "Received personalized backend development mentorship from an SDE 3 at Twilio, focusing on industry best practices, scalable API design, authentication, and database architecture.",
        "Built multiple responsive web applications combining React SPA frontends with Node.js/Express.js server backends.",
        "Structured databases utilizing MongoDB and designed complex schemas with Mongoose validation/relational referencing.",
        "Integrated JWT validation and HttpOnly cookies to securely store session information and safeguard routes.",
        "Deployed staging servers and integrated multer workflows to handle remote file system asset management.",
      ],
    },
    {
      role: "React Devloper (Internship)",
      company: "Solvify Tech, Surat",
      period: " August-2024 - February-2025",
      bullets: [
        "Developed and maintained Attendance Management and Task Management modules using React.js, implementing responsive user interfaces and CRUD functionality.",
        "Integrated REST APIs using Axios, implemented search, filtering, pagination, and collaborated with the backend team to deliver a seamless user experience.",
        "Gained practical experience by working on real-world React projects in a professional development environment.",
        "Learned industry best practices, team collaboration, and the complete software development workflow while contributing to live projects.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="border-l-2 border-gray-100 pl-6 ml-2 relative"
            >
              {/* Bullet circle dot */}
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600"></div>

              <div className="mb-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-4">
                {exp.company}
              </p>

              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc list-inside">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
