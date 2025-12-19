interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'cyan' | 'purple' | 'amber';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-space-blue text-text-secondary',
    blue: 'bg-amber-glow/20 text-amber-glow',
    cyan: 'bg-amber-glow/20 text-amber-glow',
    purple: 'bg-amber-glow/20 text-amber-bright',
    amber: 'bg-amber-glow/20 text-amber-glow',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full transition-all hover:bg-amber-glow/30 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
