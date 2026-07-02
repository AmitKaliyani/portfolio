function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 border-t border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="md:flex md:gap-12 items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              About Me
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
          </div>

          <div className="md:w-2/3 space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
            <p>
              I am a results-oriented **Full Stack Developer** specializing in
              the MERN stack. My passion lies in constructing clean,
              maintainable web architectures that are performant and
              user-centric.
            </p>
            <p>
              Having worked across client-side interfaces and backend logic, I
              bring a solid understanding of APIs, server optimization, database
              management, and asynchronous flows. I enjoy solving complex
              structural challenges and writing elegant, readable code.
            </p>
            <p>
              I focus heavily on clean RESTful API design, database modeling,
              secure JWT authentication mechanisms, and reliable file uploading
              systems. In the frontend, I utilize React paired with Tailwind CSS
              to build fluid interfaces that scale.
            </p>
            <p className="font-bold">
              Solved 120+ Data Structures and Algorithms (DSA) problems on
              LeetCode, strengthening problem-solving and algorithmic thinking.
            </p>
            <p className="text-gray-900 font-medium">
              When I am not coding, I am exploring new web architectures,
              contributing to open-source codebases, or learning about system
              designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
