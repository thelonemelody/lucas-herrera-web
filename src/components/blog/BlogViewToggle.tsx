export type BlogViewMode = 'list' | 'calendar';

interface BlogViewToggleProps {
  view: BlogViewMode;
  onChange: (view: BlogViewMode) => void;
}

export function BlogViewToggle({ view, onChange }: BlogViewToggleProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onChange('list')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          view === 'list'
            ? 'bg-electric-blue text-white glow-blue'
            : 'bg-space-dark border border-space-blue text-text-secondary hover:border-electric-blue hover:text-text-primary'
        }`}
      >
        List View
      </button>
      <button
        onClick={() => onChange('calendar')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          view === 'calendar'
            ? 'bg-electric-blue text-white glow-blue'
            : 'bg-space-dark border border-space-blue text-text-secondary hover:border-electric-blue hover:text-text-primary'
        }`}
      >
        Calendar View
      </button>
    </div>
  );
}
