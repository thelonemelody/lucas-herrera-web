import type { Job } from '../../types';
import { Badge } from '../common/Badge';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-space-dark border border-space-blue rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary">{job.title}</h3>
          <p className="text-electric-blue font-medium">{job.company}</p>
        </div>
        <span className="text-text-secondary text-sm whitespace-nowrap">
          {job.startDate} - {job.endDate}
        </span>
      </div>

      <p className="text-text-secondary mb-4">{job.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-text-primary mb-2">
          Key Achievements
        </h4>
        <ul className="list-disc list-inside text-text-secondary space-y-1">
          {job.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-2">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <Badge key={tech} variant="cyan">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
