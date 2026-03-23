"use client";

import { Features } from "@/components/ui/features";
import { Award, Users, Briefcase, Trophy } from "lucide-react";

const featuredWork = [
  {
    id: 1,
    icon: Briefcase,
    title: "Praxis AI - Case Creator Developer",
    description:
      "Developed the Case Creator multi-agent framework for ASU's Praxis AI, an educational platform that generates dynamic clinical case studies using specialized AI agents for healthcare education.",
    image: "/praxis-ai.png",
    link: "https://www.linkedin.com/pulse/praxis-ai-rise-agentic-pedagogy-lev-gonick-86voc/",
  },
  {
    id: 2,
    icon: Users,
    title: "ASU AI Day - Student Panelist",
    description:
      "Spoke to nearly 500 faculty and staff at ASU's AI Day about student perspectives on AI in education, emphasizing responsible human-centered design and the amplification of expertise through AI.",
    image: "/asu-ai-panel.jpeg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7374202550037729280/",
  },
  {
    id: 3,
    icon: Award,
    title: "Agentic AI Conference - Presenter",
    description:
      "Presented ASU's Create AI platform and Agentic Flow Builder to 600+ students, educators, and industry experts, demonstrating tools that make AI more accessible in educational settings.",
    image: "/agentic-ai-conference.jpeg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7392391450493321216/",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "AI Workflow Integration Lead",
    description:
      "Leading the integration of agentic AI workflows into faculty operations at ASU, showcasing CreateAI Builder, Syllabot, and Case Creator at the National Journalism + AI Accelerator.",
    image: "/journalism-ai-accelerator.jpeg",
    link: "https://www.linkedin.com/posts/asuenterprisetech_were-hitting-the-ground-running-for-2026-ugcPost-7415497485755965440-9m7H",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="min-h-screen py-20 px-6">
      <Features
        primaryColor="primary"
        progressGradientLight="bg-gradient-to-r from-primary to-primary-hover"
        progressGradientDark="bg-gradient-to-r from-primary to-primary-hover"
        features={featuredWork}
      />
    </section>
  );
}
