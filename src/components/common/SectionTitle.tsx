interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-text-primary text-glow">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
