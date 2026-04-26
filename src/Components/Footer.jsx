const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name / Brand */}
        <h2 className="text-xl font-semibold text-white">
          Natasha <span className="text-purple-500">Chander</span>
        </h2>

        {/* Nav Links */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/Natasha18-18"
            target="_blank"
            className="hover:text-purple-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/natasha-chander-7b86263a1/"
            target="_blank"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} Natasha Chander. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;