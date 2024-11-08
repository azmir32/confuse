import Image from 'next/image';
import { projects } from '../../data/projects';
import Button from '../ui/Button';

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src={`/images/${project.imageUrl}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.liveUrl && <Button variant="primary">View Live</Button>}
                  {project.githubUrl && <Button variant="outline">GitHub</Button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 