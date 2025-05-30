import Image from "next/image";
import Button from "../base/Button";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <figure className="relative h-56 w-full">
        <div className="relative w-full h-full">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          {project.repoUrl && (
            <Button 
              href={project.repoUrl} 
              variant="ghost"
              size="sm"
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              href={project.liveUrl} 
              size="sm"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 