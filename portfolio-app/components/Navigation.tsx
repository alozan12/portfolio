"use client";

import { Home, User, Briefcase, Mail, Award } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Navigation() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Featured", url: "#featured", icon: Award },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "About", url: "#about", icon: User },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
