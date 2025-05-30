"use client";

import ProjectCard, { Project } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Sample projects data
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.",
    image: "https://placehold.co/800x600/png",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/project",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity tool for organizing tasks, managing deadlines, and collaborating with team members.",
    image: "https://placehold.co/800x600/png",
    techStack: ["React", "Redux", "TypeScript", "Firebase"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/project",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and location-based weather information.",
    image: "https://placehold.co/800x600/png",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/project",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each project represents
            a unique challenge and solution in web development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 