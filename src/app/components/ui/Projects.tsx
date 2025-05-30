import ProjectCard, { Project } from "./ProjectCard";

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
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each project represents
            a unique challenge and solution in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 