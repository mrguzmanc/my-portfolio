"use client";

import ProjectCard, { Project } from "./ProjectCard";
import ImageModal from "./ImageModal";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Real projects data mapped to the image folders
const projects: Project[] = [
  {
    id: "score",
    title: "Score Dating App",
    description: "A dating app that allows users to score their dates based on their credit score.",
    images: [
      "/projects/score/score1.jpg",
      "/projects/score/score2.jpg"
    ],
    techStack: ["Flutterflow", "Firebase", "Python", "GCP", "Equifax"],
    liveUrl: "https://techcrunch.com/2024/08/12/score-the-dating-app-for-people-with-good-to-excellent-credit-quietly-shuts-down/",
    repoUrl: "https://github.com/username/score-platform",
  },
  {
    id: "cicada",
    title: "Cicada Home",
    description: "A home automation platform that allows users to pay for bills, manage amenities, and more.",
    images: [
      "/projects/cicada/cicada1.png",
      "/projects/cicada/cicada2.png",
      "/projects/cicada/cicada3.png"
    ],
    techStack: ["NextJS", "TypeScript", "MongoDB", "Express", "NodeJS", "TailwindCSS"],
    liveUrl: "https://cicada-dashboard.vercel.app",
    repoUrl: "https://github.com/username/cicada-dashboard",
  },
  {
    id: "neon",
    title: "Neon Money Club",
    description: "Neon Money Club is a fintech platform designed to make investing culturally relevant and accessible to younger generations. It combines financial tools with bold design, gamified experiences, and educational content to help users build wealth through personalized financial journeys.",
    images: [
      "/projects/neon/neon.png",
      "/projects/neon/playlists.png",
      "/projects/neon/playlists2.png",
      "/projects/neon/card1.png"
    ],
    techStack: ["React", "Flutterflow", "SQL", "Firebase", "Python", "GCP", "DriveWealth"],
    liveUrl: "https://joinneon.com/",
    repoUrl: "https://github.com/username/neon-playlists",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);
  const [modalAlt, setModalAlt] = useState("");

  const handleImageClick = (images: string[], currentIndex: number, alt: string) => {
    setModalImages(images);
    setModalCurrentIndex(currentIndex);
    setModalAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setModalCurrentIndex((prevIndex) => 
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setModalCurrentIndex((prevIndex) => 
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 font-mono">My Projects</h2>
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
                <ProjectCard 
                  project={project} 
                  onImageClick={handleImageClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Image Modal - rendered at top level */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalImages}
        currentIndex={modalCurrentIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
        alt={modalAlt}
      />
    </>
  );
} 