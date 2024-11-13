import Image from 'next/image';
import { projects } from '../../data/projects';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-custom-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-custom-primary font-header">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-border rounded-lg overflow-hidden bg-card shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`/images/${project.imageUrl}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-custom-primary font-header">
                  {project.title}
                </h3>
                <p className="text-text mb-6">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" className="bg-highlight text-white hover:bg-highlight/90">
                        View Live
                      </Button>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        className="border-highlight text-highlight hover:bg-highlight/10"
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}