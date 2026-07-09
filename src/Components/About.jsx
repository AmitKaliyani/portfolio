function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#111827] border-t border-b border-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="md:flex md:gap-12 items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              About Me
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded"></div>
          </div>
          <div className="md:w-2/3 space-y-2 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              I'm a Full Stack MERN Developer who enjoys building modern, responsive, and
              user-friendly web applications.
            </p>

            <p>
              I work with React, Node.js, Express.js, MongoDB, Tailwind CSS, and REST APIs
              to create scalable solutions.
            </p>

            <p>
              I have solved <span className="font-semibold text-white">120+ LeetCode problems</span> and
              enjoy learning new technologies while improving my development skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
