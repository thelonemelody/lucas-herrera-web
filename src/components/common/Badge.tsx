interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'cyan' | 'purple';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-space-blue text-text-secondary',
    blue: 'bg-electric-blue/20 text-electric-blue',
    cyan: 'bg-cyan-glow/20 text-cyan-glow',
    purple: 'bg-purple-accent/20 text-purple-accent',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
