"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Space nebula glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-[100px] translate-x-20"></div>
        <div className="absolute inset-0 bg-space-cyan/10 rounded-full blur-[80px] -translate-x-20"></div>
      </div>

      <div className="relative z-[100] max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-xl md:text-2xl mb-4 tracking-wider font-bold uppercase"
          >
            Hi there!
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            I&apos;m <span className="text-gradient font-black">Abraham</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-8 tracking-tight"
          >
            Software Developer & AI Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-primary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Welcome to my personal portfolio! I&apos;m an ambitious programmer with a passion
            to serve my community through technology. I have had the opportunity to work on
            different projects where I have had the chance to display my skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 justify-center flex-wrap relative z-[100]"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all duration-200 cursor-pointer glow-effect uppercase tracking-wide relative z-[100]"
            >
              Contact
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer border-2 border-primary uppercase tracking-wide relative z-[100]"
            >
              Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
