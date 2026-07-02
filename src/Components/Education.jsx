function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saurashtra  University",
      period: "2025 - Running",
      description:
        "Acquired foundational knowledge in object-oriented programming, data structures, algorithms, databases (SQL), and software engineering principles.",
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Udemy (Hitesh Chaudhary)",
      period: "2026",
      description:
        "Deep dive into standard web concepts, HTML/CSS layout styling, advanced Javascript modules, MERN developer track, and building real-world projects.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#111827] border-t border-b border-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Education
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded"></div>
        </div>

        <div className="space-y-12">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="border-l-2 border-slate-800 pl-6 ml-2 relative"
            >
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500"></div>

              <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-medium text-indigo-400 mb-3">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
