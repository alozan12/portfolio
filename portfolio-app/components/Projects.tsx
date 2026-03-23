"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

const GridItem = ({ icon, title, description, tags, slug }: GridItemProps) => {
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

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-6 text-primary uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-center text-secondary text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I have had the opportunity to work on numerous programming projects that showcase
            my skills in software development and AI engineering.
          </motion.p>
        </AnimatedSection>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <GridItem
              key={project.slug}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
            />
          ))}
        </ul>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-center relative z-[100]"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all duration-200 cursor-pointer glow-effect uppercase tracking-wide flex items-center gap-3 relative z-[100]"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
