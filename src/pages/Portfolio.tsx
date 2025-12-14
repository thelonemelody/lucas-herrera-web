import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { projects } from '../data/projects';

export function Portfolio() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="A collection of projects I've worked on">
          Portfolio
        </SectionTitle>
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
