import type { SkillCategory as SkillCategoryType } from '../../types';
import { SkillBadge } from './SkillBadge';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="bg-space-dark border border-space-blue rounded-xl p-6">
      <h3 className="text-xl font-bold text-electric-blue mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
