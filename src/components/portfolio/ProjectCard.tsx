import type { Project } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {project.title}
      </h3>
      <p className="text-text-secondary mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="blue">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        {project.githubUrl && (
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
          >
            GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
}
