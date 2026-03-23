"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

// Project data - replace with actual content later
const projectData: Record<string, {
  title: string;
  description: string;
  image?: string;
  fullDescription: string;
  technologies: string[];
  challenges: string;
  solution: string;
  impact: string;
}> = {
  "search-algorithms": {
    title: "Search Algorithms in Gazebo",
    description: "Implementation of advanced search algorithms in robotics simulation",
    image: "/ai12.png",
    fullDescription:
      "This project explores the implementation of various search algorithms including A*, Dijkstra, and BFS in the Gazebo robotics simulator. The goal was to compare performance and efficiency across different search strategies for autonomous navigation.",
    technologies: ["Python", "ROS", "Gazebo", "AI Planning"],
    challenges:
      "Optimizing algorithm performance in real-time simulation while maintaining accuracy in complex environments with dynamic obstacles.",
    solution:
      "Implemented heuristic optimization techniques and parallelized the search process to achieve real-time performance with minimal computational overhead.",
    impact:
      "Successfully demonstrated 40% improvement in pathfinding efficiency compared to baseline implementations.",
  },
  "turtlebot-planning": {
    title: "TurtleBot Planning and Action Refinement",
    description: "Autonomous robot planning with action refinement techniques",
    image: "/ai22.png",
    fullDescription:
      "Advanced planning system for TurtleBot robots featuring hierarchical task planning and real-time action refinement to handle dynamic environments.",
    technologies: ["Python", "ROS", "PDDL", "AI Planning"],
    challenges:
      "Balancing between plan completeness and execution speed in dynamic environments.",
    solution:
      "Developed a hybrid planning approach combining reactive behaviors with deliberative planning.",
    impact: "Achieved robust navigation in complex, dynamic environments.",
  },
  "robot-navigation": {
    title: "Robot Navigation Project",
    description: "Advanced navigation system for autonomous robots",
    image: "/robot3.png",
    fullDescription:
      "Comprehensive navigation system integrating sensor fusion, localization, and path planning for autonomous mobile robots.",
    technologies: ["C++", "ROS", "SLAM", "Sensor Fusion"],
    challenges: "Accurate localization in GPS-denied environments.",
    solution: "Implemented advanced SLAM techniques with multi-sensor fusion.",
    impact: "Enabled autonomous navigation with 95% accuracy.",
  },
  "island-generator": {
    title: "Random Island Generator",
    description: "Procedural island generation using advanced algorithms",
    image: "/islandpic.png",
    fullDescription:
      "Procedural generation system creating realistic island terrains using Perlin noise, erosion simulation, and biome distribution algorithms.",
    technologies: ["Java", "Algorithms", "Computer Graphics"],
    challenges: "Creating realistic and diverse terrain features.",
    solution: "Layered multiple noise functions with erosion simulation.",
    impact: "Generated infinite variety of realistic island landscapes.",
  },
  "audible-maps": {
    title: "Audible Maps for Wayfinding",
    description: "Accessible navigation solution using audio cues",
    image: "/map.png",
    fullDescription:
      "Mobile application providing turn-by-turn audio navigation designed for visually impaired users, using 3D audio and haptic feedback.",
    technologies: ["Swift", "iOS", "CoreLocation", "AVFoundation"],
    challenges: "Providing intuitive spatial information through audio alone.",
    solution: "Implemented 3D audio positioning and contextual audio cues.",
    impact: "Improved accessibility for visually impaired users.",
  },
  "asu-transcripts": {
    title: "ASU Transcripts",
    description: "Transcript management system for university students",
    image: "/transMain.png",
    fullDescription:
      "Web-based transcript management system allowing students to view, download, and share their academic transcripts securely.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    challenges: "Ensuring data security and privacy compliance.",
    solution: "Implemented OAuth 2.0 authentication and encrypted data storage.",
    impact: "Streamlined transcript access for thousands of students.",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectData[slug];

  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into movement values
  const nebulaX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const nebulaY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    setMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate random positions for stars - memoized so they don't regenerate on mouse move
  const stars = useMemo(() => {
    if (!mounted) return [];
    return [...Array(100)].map(() => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleDelay: Math.random() * 5,
    }));
  }, [mounted, windowSize.width, windowSize.height]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Global background effects */}
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1, pointerEvents: 'none' }}>
        {/* Animated nebula background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 30%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Stars - move as you scroll */}
        <motion.div style={{ y: starsY }}>
          {mounted &&
            stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: star.x,
                  top: star.y,
                  width: star.size,
                  height: star.size,
                }}
                animate={{
                  opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: star.twinkleDelay,
                  ease: "easeInOut",
                }}
              />
            ))}
        </motion.div>

        {/* Nebula clouds - traverse through space as you scroll */}
        {mounted && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ x: nebulaX, y: nebulaY }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-space-purple/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-space-cyan/10 rounded-full blur-3xl" />
          </motion.div>
        )}

        {/* Cursor glow effect */}
        {mounted && (
          <motion.div
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
              pointerEvents: 'none',
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          />
        )}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      {project.image && (
        <section className="py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
            <p className="text-secondary text-lg leading-relaxed">{project.fullDescription}</p>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Challenges</h2>
              <p className="text-secondary leading-relaxed">{project.challenges}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Solution</h2>
              <p className="text-secondary leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl border-2 border-primary/20"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Impact & Results</h2>
            <p className="text-secondary text-lg leading-relaxed">{project.impact}</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/#projects" className="relative z-[100]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 cursor-pointer glow-effect relative z-[100]"
              >
                View More Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
