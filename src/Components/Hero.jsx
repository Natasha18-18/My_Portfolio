import { motion } from "framer-motion";
import ProfilePic from "../assets/tashuProfilePic.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#020617] text-white flex items-center pt-20"
        >
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center py-3">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left order-2 md:order-1 px-20">

                    <p className="text-purple-400 mb-3 text-base sm:text-lg">
                        Hi, I'm
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Natasha <br />
                        <span className="text-purple-500">
                            Chander
                        </span>
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4">
                        Full Stack (MERN) Developer
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
                        I design and build modern, scalable web applications
                        with clean UI, smooth UX, and strong backend logic.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <a
                            href="#projects"
                            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-xl transition"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center order-1 md:order-2">

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="relative"
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

                        {/* Image */}
                        <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">

                            <img
                                src={ProfilePic}
                                alt="Natasha Chander"
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;