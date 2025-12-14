import { SectionTitle } from '../components/common/SectionTitle';
import { SkillCategory } from '../components/skills/SkillCategory';
import { CurrentlyLearning } from '../components/skills/CurrentlyLearning';
import { skillCategories } from '../data/skills';
import { currentlyLearning } from '../data/currentlyLearning';

export function Skills() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Technologies and competencies I've developed">
          Skills
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>

        <CurrentlyLearning items={currentlyLearning} />
      </div>
    </div>
  );
}
