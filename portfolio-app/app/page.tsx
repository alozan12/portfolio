"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
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

    // Generate shooting stars randomly
    const shootingStarInterval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight / 2), // Top half of screen
        delay: 0,
      };
      setShootingStars((prev) => [...prev, newStar]);

      // Remove the star after animation completes
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 2000);
    }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarInterval);
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
    <main className="relative">
      {/* Animated background with stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Stars that move with scroll */}
        <motion.div className="pointer-events-none" style={{ y: starsY }}>
          {mounted &&
            stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white pointer-events-none"
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

        {/* Shooting Stars */}
        {mounted &&
          shootingStars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute pointer-events-none"
              initial={{
                x: star.x,
                y: star.y,
                opacity: 1,
              }}
              animate={{
                x: star.x - 300,
                y: star.y + 300,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              style={{
                width: "3px",
                height: "3px",
                background: "white",
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(99, 102, 241, 0.4)",
                borderRadius: "50%",
              }}
            >
              {/* Shooting star trail */}
              <motion.div
                className="absolute top-0 left-0 pointer-events-none"
                style={{
                  width: "80px",
                  height: "2px",
                  background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
                  transformOrigin: "left center",
                  transform: "rotate(-45deg)",
                  filter: "blur(1px)",
                }}
              />
            </motion.div>
          ))}

        {/* Nebula clouds that move with scroll */}
        {mounted && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ x: nebulaX, y: nebulaY }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-space-purple/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-space-cyan/10 rounded-full blur-3xl pointer-events-none" />
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
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          />
        )}
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Navigation />
        <Hero />
        <Featured />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
