import type { Job } from '../../types';
import { JobCard } from './JobCard';

interface TimelineProps {
  jobs: Job[];
}

export function Timeline({ jobs }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={`relative flex flex-col md:flex-row gap-4 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-electric-blue rounded-full transform -translate-x-1/2 mt-8 glow-blue" />

            {/* Content */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
              <JobCard job={job} />
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
