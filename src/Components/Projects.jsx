import { motion } from "framer-motion";
import { projects } from "../Data/ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#020617] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Some of my recent work
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;