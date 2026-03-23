"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { Copy, ExternalLink, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alozan12@asu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedSection>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-16 text-primary uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl group relative"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">Email</h3>
                  <p className="text-secondary break-all">
                    alozan12@asu.edu
                  </p>
                </div>
              </div>
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/abrahamlozanoserna/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">LinkedIn</h3>
                  <p className="text-secondary group-hover:text-primary transition-colors">
                    Abraham Lozano Serna
                  </p>
                </div>
              </div>
              <div className="w-full px-4 py-2 bg-primary/10 group-hover:bg-primary/20 text-primary rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
                <ExternalLink size={16} />
                <span>Visit Profile</span>
              </div>
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.6}>
          <motion.footer
            className="text-center mt-20 text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">
              Abraham Lozano Serna Personal Portfolio
              <br />
              <a href="mailto:alozan12@asu.edu" className="text-primary hover:text-primary-hover transition-colors">
                alozan12@asu.edu
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/abrahamlozanoserna/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
                LinkedIn
              </a>
            </p>
          </motion.footer>
        </AnimatedSection>
      </div>
    </section>
  );
}
