import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#020617] text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 leading-relaxed"
        >
          I'm{" "}
          <span className="text-white font-semibold">
            Natasha Chander
          </span>, a passionate MERN stack developer who loves building modern,
          scalable and high-performance web applications with clean UI and
          smooth user experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 leading-relaxed"
        >
          I focus on writing clean code, creating responsive layouts and
          delivering user-friendly interfaces that actually solve real-world
          problems.
        </motion.p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-purple-500">15+</h3>
            <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-purple-500">MERN</h3>
            <p className="text-gray-400 text-sm mt-1">Tech Stack</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-purple-500">UI/UX</h3>
            <p className="text-gray-400 text-sm mt-1">Design Focus</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;