"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { useEffect, useState, useMemo } from "react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

const ProjectCard = ({ icon, title, description, tags, slug }: ProjectCardProps) => {
  return (
    <li className="list-none h-full">
      <Link href={`/projects/${slug}`} className="block relative z-[100]">
        <div className="relative h-[380px] rounded-[1.25rem] border-[0.75px] border-primary/20 p-2 md:rounded-[1.5rem] md:p-3 hover:border-primary/40 transition-colors cursor-pointer">
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[inherit]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
          </div>
          <div className="relative z-[100] flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] bg-dark/80 backdrop-blur-sm p-6 shadow-sm">
            <div className="w-fit rounded-lg border-[0.75px] border-primary/30 bg-primary/10 p-2 mb-4">
              {icon}
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl leading-tight font-bold tracking-tight md:text-2xl text-white mb-3">
                {title}
              </h3>
              <p className="text-sm leading-relaxed md:text-base text-secondary mb-4 flex-1">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-semibold border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide hover:text-primary-hover transition-colors group mt-auto">
                View Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default function AllProjectsPage() {
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

  return (
    <main className="relative min-h-screen py-20 px-6">
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
      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 1 }}>
        {/* Back to Home Button */}
        <Link href="/#projects">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight mb-6">
            All Projects
          </h1>
          <p className="text-lg text-secondary max-w-3xl">
            Explore my complete portfolio of projects spanning AI, robotics, web development, and more.
            Each project showcases different aspects of my skills in software development and engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                icon={project.icon}
                title={project.title}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
