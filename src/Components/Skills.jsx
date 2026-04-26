import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaGithub
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiVercel 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "SQL", icon: <SiMysql /> }, 
      { name: "Python", icon: <FaPython /> }, 
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },    
      { name: "VS Code", icon: <VscCode /> }, 
      { name: "Vercel", icon: <SiVercel /> },    
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#020617] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I work with
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">

          {skills.map((section, index) => (
            <div key={index}>

              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                {section.category}
              </h3>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                {section.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#0f172a] p-6 rounded-2xl text-center shadow-lg border border-gray-800 hover:border-purple-500 transition"
                  >
                    <div className="text-4xl mb-3 text-purple-400">
                      {skill.icon}
                    </div>
                    <p className="text-gray-300 font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;