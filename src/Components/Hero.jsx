import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "../assets/Images/professional_portrait_1782736277302.png";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 bg-[#0B0F19] text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 py-12 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12 w-full">
        {/* Left Side: Intro text */}
        <motion.div
          className="md:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-indigo-400 font-semibold tracking-wide text-sm uppercase mb-3"
          >
            Available for Opportunities
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-none mb-6"
          >
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 font-extrabold">Amit Kaliyani</span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4"
          >
            Full Stack Developer (MERN)
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            I build robust backend systems and clean, intuitive user interfaces.
            Specializing in Node.js, React, Express, and MongoDB to deliver
            performant end-to-end web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              MongoDB
            </span>
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              Express.js
            </span>
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              React
            </span>
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              Node.js
            </span>
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              Tailwind CSS
            </span>
            <span className="bg-[#151D30] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800/80">
              REST APIs
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start items-center space-x-6 text-gray-400"
          >
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-md"
            >
              Get in Touch
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AmitKaliyani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 text-xl transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kaliyani-7b60ab342/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 text-xl transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/AmitKaliyani/"
                target="_blank"
                className="hover:text-indigo-400 text-xl transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href="mailto:kaliyaniamit705@gmail.com"
                className="hover:text-indigo-400 text-xl transition-colors"
                aria-label="Email Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Image placeholder or elegant icon representation */}
        <motion.div
          className="md:w-1/3 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#111827] flex items-center justify-center">
            <img
              src={Image}
              alt="profile-pic"
              className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
