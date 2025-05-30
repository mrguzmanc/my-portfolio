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
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-[480px] flex flex-col">
      <figure className="relative h-48 w-full flex-shrink-0">
        <div className="relative w-full h-full">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </figure>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">{project.description}</p>
        
        {/* Fixed height tech stack section */}
        <div className="h-20 mb-4 overflow-hidden">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 6).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 text-xs rounded-full whitespace-nowrap">
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                +{project.techStack.length - 6}
              </span>
            )}
          </div>
        </div>
        
        {/* Fixed position button section */}
        <div className="flex justify-end gap-2 mt-auto">
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