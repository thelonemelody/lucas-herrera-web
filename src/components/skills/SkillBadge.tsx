interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-4 py-2 bg-space-blue border border-space-blue text-text-primary rounded-lg hover:border-amber-glow hover:text-amber-glow transition-all duration-300">
      {skill}
    </span>
  );
}
