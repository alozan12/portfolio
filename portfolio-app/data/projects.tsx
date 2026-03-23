import { Bot, Navigation, Mountain, Accessibility, FileText } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug: string;
  tags: string[];
  featured: boolean;
}

export const allProjects: Project[] = [
  {
    title: "Search Algorithms in Gazebo",
    description: "Implementation of advanced search algorithms in robotics simulation",
    icon: <Bot className="h-4 w-4" />,
    image: "/ai12.png",
    slug: "search-algorithms",
    tags: ["AI", "Robotics", "Python"],
    featured: true,
  },
  {
    title: "TurtleBot Planning",
    description: "Autonomous robot planning with action refinement techniques",
    icon: <Navigation className="h-4 w-4" />,
    image: "/ai22.png",
    slug: "turtlebot-planning",
    tags: ["AI", "ROS", "Planning"],
    featured: true,
  },
  {
    title: "Robot Navigation",
    description: "Advanced navigation system for autonomous robots",
    icon: <Navigation className="h-4 w-4" />,
    image: "/robot3.png",
    slug: "robot-navigation",
    tags: ["Robotics", "Navigation"],
    featured: true,
  },
  {
    title: "Island Generator",
    description: "Procedural island generation using advanced algorithms",
    icon: <Mountain className="h-4 w-4" />,
    image: "/islandpic.png",
    slug: "island-generator",
    tags: ["Algorithms", "Graphics"],
    featured: true,
  },
  {
    title: "Audible Maps",
    description: "Accessible navigation solution using audio cues",
    icon: <Accessibility className="h-4 w-4" />,
    image: "/map.png",
    slug: "audible-maps",
    tags: ["Accessibility", "iOS"],
    featured: true,
  },
  {
    title: "ASU Transcripts",
    description: "Transcript management system for university students",
    icon: <FileText className="h-4 w-4" />,
    image: "/transMain.png",
    slug: "asu-transcripts",
    tags: ["Web", "Full-Stack"],
    featured: true,
  },
  // Add more projects here with featured: false to show only on /projects page
];

export const featuredProjects = allProjects.filter((project) => project.featured);
