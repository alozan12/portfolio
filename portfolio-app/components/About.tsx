"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const LightningIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M8 12h.01M16 12h.01M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-16 text-primary uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            My Mission
          </motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-effect p-8 rounded-2xl">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-secondary">
                    I am dedicated to leveraging technology to create meaningful solutions that
                    serve and empower communities. Through innovative software development and
                    AI engineering, I strive to build tools that make a positive impact.
                  </p>
                  <p className="text-secondary">
                    My journey in computer science has been driven by curiosity and a commitment
                    to continuous learning. Every project is an opportunity to push boundaries,
                    solve complex problems, and contribute to the advancement of technology.
                  </p>
                  <p className="text-primary font-semibold">
                    Let&apos;s build something amazing together.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              {[
                {
                  title: "Innovation",
                  description: "Pushing boundaries with cutting-edge technology",
                  icon: <LightningIcon />,
                },
                {
                  title: "Community",
                  description: "Building solutions that serve and empower",
                  icon: <CommunityIcon />,
                },
                {
                  title: "Excellence",
                  description: "Committed to quality and continuous improvement",
                  icon: <TargetIcon />,
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-effect p-6 rounded-xl cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{value.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-hover transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-secondary">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
